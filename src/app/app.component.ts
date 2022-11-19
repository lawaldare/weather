import { WeatherService } from "./services/weather.service";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  weatherReport$: any;
  cityName: string;

  constructor(private weather: WeatherService) {}

  onSubmit(form: NgForm) {
    this.cityName = form.value.city;
    this.weatherReport$ = this.weather.getWeather(this.cityName).pipe(take(1));
    form.resetForm();
  }
}
