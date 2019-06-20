import { Injectable } from '@angular/core';

import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {

  redirectUrl: string = 'redirect_url';
  
  constructor(private jwt: JwtService) { }

  get isAuthenticated(): boolean {
    return (this.jwt.token && !this.jwt.isTokenExpired);
  }

  setToken(token: string) {
    this.jwt.saveToken(token);
    this.setUser(token);
  }

  setUser(token: string) {
  }
}
