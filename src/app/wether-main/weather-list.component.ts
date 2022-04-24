import { Component, OnInit } from "@angular/core";
import { WeatherItemComponent } from "./weather-item.component";
import { WEATHER_ITEMS } from "./weather.data";
import { WeatherItem } from "./weather-item";
import { weatherservice } from "./weather.service";
import { WeatherSearchComponent } from "./weather-search.component";
@Component({
    selector :'weather-list',
    templateUrl:'weather-list.html',
    styleUrls :['./weather-list.css'],
    providers : [weatherservice]
})
export class WeatherListComponent implements OnInit{
      weatherItems :WeatherItem[]=[];
      constructor(private service:weatherservice){
      }
      ngOnInit(): void {
          this.weatherItems = WEATHER_ITEMS;
      }
}