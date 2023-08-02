import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url_Api: string = "https://api.openweathermap.org/data/2.5/weather?appid";
  key_Api: string = "caffae02abcf570a374727be813eeefd";

  place: string = "buenos aires";
  country: string = "ar";

  data: any = "";
  // temp: number = 0;
  // tempCelsius: string = "";

  constructor(
    private client: ClientService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.client.getRequest(`${this.url_Api}=${this.key_Api}&q=${this.place},${this.country}&lang=es`).subscribe(
      ((response: any) => {
        console.log(response);
        this.data = response;
        // this.temp = response.main.temp - 272.15;
        // console.log(response.main.temp);
        // console.log(this.temp);
        // this.tempCelsius = this.temp.toFixed(0);
        console.log(response.weather[0]);



      }),
      ((error: any) => {
        console.log("Error");

      })
    )
  }
}
