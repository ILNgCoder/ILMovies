import { Movie } from '../models/movie.model';
import { Star } from '../models/star.model';
import { ClipViewModel } from './clip.viewmodel';

export class StarViewModel {

  star: Star;
  clips: ClipViewModel[] = [];
  movies: Movie[] = [];
  similarStars: Star[] = [];

  constructor(data: any) {
    this.star = new Star(data);
    if (data.clipStar) {
      for (let cs of data.clipStar) {
        this.clips.push(new ClipViewModel(cs.clip));
      }
    }
    if (data.movieStar) {
      for (let ms of data.movieStar) {
        this.movies.push(new Movie(ms.movie));
      }
    }
    if (data.similarStarStar) {
      for (let ss of data.similarStarStar) {
        this.similarStars.push(new Star(ss.similar));
      }
    }
  }
}