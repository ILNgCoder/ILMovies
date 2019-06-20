import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);

    this.http.post(`${environment.api_url}/auth/login`, credentials)
      .subscribe(
        response => {
          this.auth.setToken((<any>response).token);
          this.invalidLogin = false;
          const redirectUrl = window.localStorage[this.auth.redirectUrl];
          if (redirectUrl) {
            window.localStorage.removeItem(this.auth.redirectUrl);
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate(['/admin/dashboard']);
          }
        },
        err => {
          this.invalidLogin = true;
        });
  }
}
