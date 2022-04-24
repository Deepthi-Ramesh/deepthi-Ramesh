import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { WeatherItem } from "./weather-item";
import { weatherservice } from "./weather.service";
import { debounceTime } from "rxjs";
import { distinctUntilChanged } from "rxjs";
import { switchMap } from "rxjs";
@Component({
    selector : "weather-search",
    templateUrl : './weather-search.html',
    styleUrls :['./weather-search.css']
})
export class WeatherSearchComponent implements OnInit{
    data:any={};
    private searchstream = new Subject<string>();
    constructor(private weatherservice : weatherservice){
    }
   getdata(data:NgForm){
       console.log(data.value)
       this.weatherservice.searchWeatherdata(data.value.cityname)
       .subscribe(
           form=>{
               const unique = new WeatherItem(form.name,form.weather[0].icon, form.weather[0].description, form.main.temp);
               this.weatherservice.addWeatheritem(unique);
           }
       )
   }
   onsearchlocation(cityname : string){
     this.searchstream
     .next(cityname);
}
 ngOnInit() {
     this.searchstream
     .pipe(debounceTime(400))
     .pipe(distinctUntilChanged())
     .pipe(switchMap((input:string)=> this.weatherservice.searchWeatherdata(input)))
     .subscribe(
         data => this.data=data
     ); 
     
 }
   
}