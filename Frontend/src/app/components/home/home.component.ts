import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  weatherIcon: string = "";
  // temp: number = 0;
  // tempCelsius: string = "";

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
        console.log(response);
        this.data = response;

        this.checkWeather(response.weather[0].main);


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
          console.log(response);
          this.data = response;
        }),
        ((error: any) => {
          console.log("Error");

        })
      )

    } else {
      console.log("Verifique sus datos");
    }
  }

  checkWeather = ((weather: string) => {

    if (weather === "Thunderstorm") {
      console.log(1);
      this.weather = "Tormenta eléctrica"
      this.weatherIcon = "fa-solid fa-cloud-bolt";

    } else if (weather === "Drizzle") {
      console.log(2);
      this.weather = "Llovizna"
      this.weatherIcon = "fa-solid fa-cloud-rain";

    } else if (weather === "Rain") {
      console.log(3);
      this.weather = "Lluvia"
      this.weatherIcon = "fa-solid fa-cloud-showers-heavy";

    } else if (weather === "Snow") {
      console.log(4);
      this.weather = "Nieve"
      this.weatherIcon = "fa-solid fa-snowflake";

    } else if (weather === "Mist") {
      console.log(5);
      this.weather = "Niebla"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Smoke") {
      console.log(6);
      this.weather = "Humo"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Haze") {
      console.log(7);
      this.weather = "Neblina"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Dust") {
      console.log(8);
      this.weather = "Polvo en suspensión"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Fog") {
      console.log(9);
      this.weather = "Niebla densa"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Sand") {
      console.log(10);
      this.weather = "Arena en suspensión"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Ash") {
      console.log(11);
      this.weather = "Ceniza en suspensión"
      this.weatherIcon = "fa-solid fa-smog";

    } else if (weather === "Squall") {
      console.log(12);
      this.weather = "Ráfaga"
      this.weatherIcon = "fa-solid fa-bolt-lightning";

    } else if (weather === "Tornado") {
      console.log(13);
      this.weather = "Tornado"
      this.weatherIcon = "fa-solid fa-tornado";

    } else if (weather === "Clear") {
      console.log(14);
      this.weather = "Cielo despejado"
      this.weatherIcon = "fa-solid fa-sun";

    } else if (weather === "Clouds") {
      console.log(15);
      this.weather = "Nubes"
      this.weatherIcon = "fa-solid fa-cloud";

    }

  })

}
