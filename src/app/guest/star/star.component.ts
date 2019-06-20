import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiService, LogService } from 'src/app/core/services';
import { Star } from 'src/app/shared/models/star.model';
import { StarViewModel } from 'src/app/shared/view-models/star.viewmodel';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  starVM$: Observable<StarViewModel>;

  constructor(
    private route: ActivatedRoute,
    private log: LogService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.starVM$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const _id = params.get('id');
        const isNum = Number(_id) > 0;
        if (isNum) {
          const id = Number(_id);
          return this.api.getStar(id).pipe(map(data => {
            const starVM = new StarViewModel(data);
            return starVM;
          }));
        } else {
          this.log.gotoError('Invalid Star ID!');
          return of(new StarViewModel(new Star()));
        }
      })
    )
  }
}
