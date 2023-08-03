import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/models/code-country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url_Api: string = "https://api.openweathermap.org/data/2.5/weather?appid";
  key_Api: string = "caffae02abcf570a374727be813eeefd";

  place: string = "armenia";
  country: string = "co";

  data: any = "";
  weather: string = "";
  // weatherIcon: string = "";
  weatherIconUrl: string = "";
  backgroundColor: string = "";
  // temp: number = 0;
  // tempCelsius: string = "";

  countries: any = countries;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      place: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.client.getRequest(`${this.url_Api}=${this.key_Api}&q=${this.place},${this.country}&lang=es`).subscribe(
      ((response: any) => {
        // console.log(response);
        this.data = response;

        this.checkWeather(response.weather[0].main, response.weather[0].icon);


      }),
      ((error: any) => {
        console.log(error);

      })
    )
  }

  onSubmit() {

    if (this.form.valid) {
      // console.log("Hola");
      // console.log(this.place);
      // console.log(this.country);

      this.client.getRequest(`${this.url_Api}=${this.key_Api}&q=${this.form.value.place},${this.form.value.country}&lang=es`).subscribe(
        ((response: any) => {
          // console.log(response);
          this.data = response;
          this.checkWeather(response.weather[0].main, response.weather[0].icon);

        }),
        ((error: any) => {
          console.log("Error");

        })
      )

    } else {
      console.log("Verifique sus datos");
    }
  }

  checkWeather = ((weather: string, weatherIcon: string) => {

    // console.log("a", weatherIcon);

    if (weather === "Thunderstorm") {
      // console.log(1);
      this.weather = "Tormenta eléctrica"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Drizzle") {
      // console.log(2);
      this.weather = "Llovizna"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Rain") {
      // console.log(3);
      this.weather = "Lluvia"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Snow") {
      // console.log(4);
      this.weather = "Nieve"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Mist") {
      // console.log(5);
      this.weather = "Niebla"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Smoke") {
      // console.log(6);
      this.weather = "Humo"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Haze") {
      // console.log(7);
      this.weather = "Neblina"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Dust") {
      // console.log(8);
      this.weather = "Polvo en suspensión"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Fog") {
      // console.log(9);
      this.weather = "Niebla densa"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Sand") {
      // console.log(10);
      this.weather = "Arena en suspensión"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Ash") {
      // console.log(11);
      this.weather = "Ceniza en suspensión"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Squall") {
      // console.log(12);
      this.weather = "Ráfaga"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Tornado") {
      // console.log(13);
      this.weather = "Tornado"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Clear") {
      // console.log(14);
      this.weather = "Cielo despejado"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    } else if (weather === "Clouds") {
      // console.log(15);
      this.weather = "Nubes"
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    }

  })


}
