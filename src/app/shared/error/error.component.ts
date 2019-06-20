import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/core/services';
import { ErrorType } from '../enums/error-type.enum';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  isFrontend: boolean = true;
  code: Number = 400;
  text: string = '';

  constructor(
    private log: LogService
  ) { }

  get isValidCode(): boolean {
    return (this.code > 300) && (this.code < 504);
  }

  ngOnInit() {
    switch (this.log.errorType) {
      case ErrorType.Frontend: {
        this.text = this.log.errorText;
        break;
      }
      case ErrorType.Backend: {
        this.isFrontend = false;
        this.code = this.log.errorCode;
        this.text = this.isValidCode ? this.log.errorText : 'Invalid error code!';
        break;
      }
      default: {
        break;
      }
    }
  }
}
