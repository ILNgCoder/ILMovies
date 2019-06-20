import { Clip } from '../models/clip.model';
import { Movie } from '../models/movie.model';
import { Star } from '../models/star.model';

export class MovieViewModel {

  movie: Movie;
  clips: Clip[] = [];
  stars: Star[] = [];
  similarMovies: Movie[] = [];

  constructor(data: any) {
    this.movie = new Movie(data);
    if (data.clip) {
      for (let clip of data.clip) {
        this.clips.push(new Clip(clip));
      }
    }
    if (data.movieStar) {
      for (let ms of data.movieStar) {
        let star = new Star(ms.star);
        star['characterName'] = ms.characterName;
        this.stars.push(star);
      }
    }
    if (data.similarMovieMovie) {
      for (let sm of data.similarMovieMovie) {
        this.similarMovies.push(new Movie(sm.similar));
      }
    }
  }
}