import { WeatherService } from "./services/weather.service";
import { Component, inject } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false,
})
export class AppComponent {
  weatherReport$: any;
  cityName: string;
  private readonly weather = inject(WeatherService);

  public weatherReport = this.weather.selectedCity;

  onSubmit(form: NgForm) {
    this.cityName = form.value.city;
    this.weather.selectCity(this.cityName);
    form.resetForm();
  }
}
