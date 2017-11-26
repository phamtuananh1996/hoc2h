import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: number;
  errors: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginFacebook() {

    let loginService; loginService = this.loginService;
    let errors; errors = this.errors;
    let router; router = this.router;

    FB.login(function(response) {
      if (response.status === 'connected') {
        let data;
        data = {
          accessToken: response.authResponse.accessToken,
          provider: 'facebook'
        };
        loginService.loginFacebook(data).then(res => {

          if (res.status === 200) {
            localStorage.setItem('token', res.json().token);
            router.navigate(['/']);
          } else {
            errors = res.json();
          }

        });
      } else {
        FB.login();
      }
    });

  }

  login() {

    let data: any;

    data = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(data).then(res => {

      this.status = res.status;

      if (this.status === 200) {
        localStorage.setItem('token', res.json().token);
        localStorage.setItem('user', JSON.stringify(res.json().user));
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });

  }

}
