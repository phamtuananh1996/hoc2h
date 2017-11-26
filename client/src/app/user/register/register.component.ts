import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  passwordConfirmation: string;
  errors: any;
  status: number;
  email: string;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    let data: any;
    data = {
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
      email: this.email
    };
    this.registerService.register(data).then(res => {

      this.status = res.status;

      if (this.status === 200) {
        localStorage.setItem('token', res.json().token);
        localStorage.setItem('user', res.json().user);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });
  }

}
