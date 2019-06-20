import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ClipViewModel } from 'src/app/shared/view-models/clip.viewmodel';
import { ApiService } from 'src/app/core/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  clips$: Observable<ClipViewModel[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.clips$ = this.api.getClips().pipe(map(data => {
      let clips = [];
      for (let clip of data) {
        clips.push(new ClipViewModel(clip));
      }
      return clips;
    }));
  }
}
