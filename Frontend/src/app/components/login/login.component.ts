import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.form.valid) {
      this.client.postRequest("http://localhost:10101/login",
        {
          email: this.form.value.email,
          password: this.form.value.password
        }, undefined, undefined).subscribe(
          ((response: any) => {
            localStorage.setItem("token", response.token);
            this.auth.login();
            console.log(response.Status);

          }),
          ((error: any) => {
            console.log(error.error.Status);

          })
        )

    } else {
      console.log("Verifique sus datos");
    }
  }

}

