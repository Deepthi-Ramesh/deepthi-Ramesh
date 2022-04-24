import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherItemComponent } from './wether-main/weather-item.component';
import { WeatherListComponent } from './wether-main/weather-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherSearchComponent } from './wether-main/weather-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
