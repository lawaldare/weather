import { computed, Injectable, signal } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { rxResource } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  BASE_URL = environment.baseURL;
  api_key: string = environment.apiKey;

  private city = signal<string>("");

  constructor(private http: HttpClient) {}

  private cityResource = rxResource({
    request: () => ({
      city: this.city(),
    }),
    loader: ({ request }) => {
      return this.http.get(
        `${this.BASE_URL}?q=${request.city}&units=metric&appid=${this.api_key}`
      );
    },
  });

  public selectedCity = computed(() => this.cityResource.value());

  public selectCity(year: string): void {
    this.city.set(year);
  }
}
