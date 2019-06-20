import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiService, LogService } from 'src/app/core/services';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieViewModel } from 'src/app/shared/view-models/movie.viewmodel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieVM$: Observable<MovieViewModel>;

  constructor(
    private route: ActivatedRoute,
    private log: LogService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.movieVM$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const _id = params.get('id');
        const isNum = Number(_id) > 0;
        if (isNum) {
          const id = Number(_id);
          return this.api.getMovie(id).pipe(map(data => {
            const movieVM = new MovieViewModel(data);
            return movieVM;
          }));
        } else {
          this.log.gotoError('Invalid Movie ID!');
          return of(new MovieViewModel(new Movie()));
        }
      })
    )
  }
}
