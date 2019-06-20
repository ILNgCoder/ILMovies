import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services';
import { Star } from 'src/app/shared/models/star.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars$: Observable<Star[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.stars$ = this.api.getStars().pipe(map(data => {
      let stars = [];
      for (let star of data) {
        stars.push(new Star(star));
      }
      return stars;
    }));
  }
}
