import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClipsComponent } from './clips/clips.component';
import { MainComponent } from './main/main.component';
import { ClipComponent } from './clip/clip.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { StarsComponent } from './stars/stars.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    ClipsComponent,
    MainComponent,
    ClipComponent,
    MoviesComponent,
    MovieComponent,
    StarsComponent,
    StarComponent
  ],
  imports: [
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
