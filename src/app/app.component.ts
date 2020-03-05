import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  weatherReport: any;
  cityName: string;

  constructor(private weather: WeatherService) { }


  onSubmit(form: NgForm) {
    this.cityName = form.value.city;
    this.weather.getWeather(this.cityName).subscribe(data => {
      this.weatherReport = data;
      console.log(this.weatherReport);
    }, error => {
      console.log(error.message)
    })
    form.resetForm();
  }
}
