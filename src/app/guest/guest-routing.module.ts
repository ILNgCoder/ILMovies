import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ClipsComponent } from './clips/clips.component';
import { ClipComponent } from './clip/clip.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { StarsComponent } from './stars/stars.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'clips',
    component: ClipsComponent
  },
  {
    path: 'clip/:id',
    component: ClipComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'stars',
    component: StarsComponent
  },
  {
    path: 'star/:id',
    component: StarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
