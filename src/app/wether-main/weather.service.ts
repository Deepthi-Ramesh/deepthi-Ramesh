import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { WEATHER_ITEMS } from "./weather.data";
import { HttpClient } from "@angular/common/http";
import { WeatherItem } from "./weather-item";
@Injectable({
    providedIn: 'root',
})
export class weatherservice{
    constructor(private http :HttpClient){}
    getweatheritems(){
        return WEATHER_ITEMS;
    }
    addWeatheritem(weatheritem : WeatherItem){
        WEATHER_ITEMS.push(weatheritem)
    }
    searchWeatherdata(cityname :string) : Observable<any>{
          console.log(cityname);
          return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=49ea0e6138e77e7af4ae2a412668ec43&units=metric')
          .pipe(map(response =>response))
          .pipe(
            catchError(error => {
            
                console.error(error);
                return throwError(error.json());

            })
          )

          
    }
}