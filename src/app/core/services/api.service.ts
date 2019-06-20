import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Clip } from 'src/app/shared/models/clip.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { Star } from 'src/app/shared/models/star.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getClips(): Observable<Clip[]> {
    return this.http.get<Clip[]>(`${environment.api_url}/clips`);
  }

  getClip(id: number): Observable<Clip> {
    return this.http.get<Clip>(`${environment.api_url}/clips/${id}`);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.api_url}/movies`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.api_url}/movies/${id}`);
  }

  getStars(): Observable<Star[]> {
    return this.http.get<Star[]>(`${environment.api_url}/stars`);
  }

  getStar(id: number): Observable<Star> {
    return this.http.get<Star>(`${environment.api_url}/stars/${id}`);
  }

}
