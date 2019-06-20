import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.movies$ = this.api.getMovies().pipe(map(data => {
      let movies = [];
      for (let movie of data) {
        movies.push(new Movie(movie));
      }
      return movies;
    }));
  }
}
