import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services';
import { Clip } from 'src/app/shared/models/clip.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { Star } from 'src/app/shared/models/star.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mode: string = 'Clips';

  clips$: Observable<Clip[]>;
  movies$: Observable<Movie[]>;
  stars$: Observable<Star[]>;

  clipColumns: string[] = ['id', 'youtubeId', 'name', 'url', 'movieId', 'isActual', 'createdOn'];
  movieColumns: string[] = ['id', 'youtubeId', 'name', 'url', 'director', 'year', 'isActual', 'createdOn'];
  starColumns: string[] = ['id', 'youtubeId', 'name', 'url', 'isActual', 'createdOn'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.clips$ = this.api.getClips().pipe(map(data => {
      let clips = [];
      for (let clip of data) {
        clips.push(new Clip(clip));
      }
      return clips;
    }));
    this.movies$ = this.api.getMovies().pipe(map(data => {
      let movies = [];
      for (let movie of data) {
        movies.push(new Movie(movie));
      }
      return movies;
    }));
    this.stars$ = this.api.getStars().pipe(map(data => {
      let stars = [];
      for (let star of data) {
        stars.push(new Star(star));
      }
      return stars;
    }));
  }

  setClips() {
    this.mode = 'Clips';
  }

  setMovies() {
    this.mode = 'Movies';
  }

  setStars() {
    this.mode = 'Stars';
  }
}
