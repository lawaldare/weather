import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  BASE_URL = environment.baseURL;
  api_key: string = environment.apiKey;

  constructor(private http: HttpClient) { }


  getWeather(city: string) {
    return this.http.get(`${this.BASE_URL}?q=${city}&units=metric&appid=${this.api_key}`);
  }
}
