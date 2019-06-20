import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private jwt: JwtService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.jwt.destroyToken();
    this.router.navigate(['/']);
  }
}
