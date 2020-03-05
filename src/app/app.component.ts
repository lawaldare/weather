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

  constructor(private weather: WeatherService) { }


  onSubmit(form: NgForm) {
    let city: string = form.value.city;
    this.weather.getWeather(city).subscribe(data => {
      this.weatherReport = data;
      console.log(this.weatherReport)
    }, error => {
      console.log(error)
    })
    form.resetForm();
  }
}
