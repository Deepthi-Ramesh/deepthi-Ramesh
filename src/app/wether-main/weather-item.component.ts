import { Component, Input } from "@angular/core";
import { WeatherItem } from "./weather-item";
@Component({
   selector : 'weather-item',
   templateUrl :"weather-item.html",
   styleUrls :["./weather-item.css"]
})
export class WeatherItemComponent{
   @Input('item') weatherItem : WeatherItem ;
 }
