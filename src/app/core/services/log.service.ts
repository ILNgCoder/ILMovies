import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { ErrorType } from 'src/app/shared/enums/error-type.enum';

@Injectable()
export class LogService {

  errorType: ErrorType = ErrorType.Frontend;
  errorCode: Number = 400;
  errorText: string = '';

  constructor(
    private router: Router
  ) { }

  log(result: any, operation?: string) {
    //if (operation) console.log(operation);
    //console.log(result);
  }

  successfulRequest(request: HttpRequest<any>, response: any) {
    this.log(response, `Successful request [${request.url}]:`);
  }

  unSuccessfulRequest(request: HttpRequest<any>, response: any) {
    this.log(response, `Request [${request.url}] failed:`);
  }

  handleError<T>(request: HttpRequest<any>, result?: T) {
    return (error: any): Observable<T> => {
      this.log(`Request [${request.url}] failed: ${error.message}`);
      this.errorType = ErrorType.Backend;
      this.errorCode = Number(error.status);
      this.gotoError(error.statusText);
      return of(result as T);
    };
  }

  gotoError(text: string) {
    this.errorText = text;
    this.router.navigate(['/error']);
  }
}
