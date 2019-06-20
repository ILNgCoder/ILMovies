import { Clip } from '../models/clip.model';
import { Movie } from '../models/movie.model';
import { Star } from '../models/star.model';

export class ClipViewModel {

  clip: Clip;
  movie: Movie;
  stars: Star[] = [];
  similarClips: ClipViewModel[] = [];
  similarClipsCount: number = 3;

  constructor(data: any) {
    this.clip = new Clip(data);
    if (data.movie) {
      this.movie = new Movie(data.movie);
    }
    if (data.clipStar) {
      for (let cs of data.clipStar) {
        this.stars.push(new Star(cs.star));
      }
    }
    if (data.similarClipClip) {
      for (let sc of data.similarClipClip) {
        if (this.similarClips.length < this.similarClipsCount) {
          this.similarClips.push(new ClipViewModel(sc.similar));
        }
      }
    }
  }
}