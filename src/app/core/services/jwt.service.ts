import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtService {

  jwt: string = 'jwt';

  get token(): string {
    return window.localStorage[this.jwt];
  }

  saveToken(token: string) {
    window.localStorage[this.jwt] = token;
  }

  destroyToken() {
    window.localStorage.removeItem(this.jwt);
  }

  get isTokenExpired(): boolean {
    let helper = new JwtHelperService();
    return helper.isTokenExpired(this.token);
  }
}
