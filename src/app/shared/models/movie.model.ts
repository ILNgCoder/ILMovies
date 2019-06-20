import { ILObject } from './ilobject.model';

export class Movie extends ILObject {

  director: string = '';
  year: number = 0;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.director = data.director;
      this.year = data.year;
    }
  }
}