import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fadeAnimation } from './shared/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() { }
}
