import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiService, LogService } from 'src/app/core/services';
import { Clip } from 'src/app/shared/models/clip.model';
import { ClipViewModel } from 'src/app/shared/view-models/clip.viewmodel';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {

  clipVM$: Observable<ClipViewModel>;
  otherClips$: Observable<ClipViewModel[]>;

  constructor(
    private route: ActivatedRoute,
    private log: LogService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.clipVM$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const _id = params.get('id');
        const isNum = Number(_id) > 0;
        if (isNum) {
          const id = Number(_id);
          return this.api.getClip(id).pipe(map(data => {
            const clipVM = new ClipViewModel(data);
            return clipVM;
          }));
        } else {
          this.log.gotoError('Invalid Clip ID!');
          return of(new ClipViewModel(new Clip()));
        }
      })
    );

    this.otherClips$ = this.api.getClips().pipe(map(data => {
      let otherClips = [];
      for (let clip of data) {
        otherClips.push(new ClipViewModel(clip));
      }
      return otherClips;
    }));
  }
}
