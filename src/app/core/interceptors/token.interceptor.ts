import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { JwtService, LogService } from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private jwt: JwtService,
    private log: LogService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.jwt.token;

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });

    return next.handle(request).pipe(
      tap(
        response => {
          if (response instanceof HttpResponse) {
            this.log.successfulRequest(request, response.body);
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            //this.log.unSuccessfulRequest(request, error.message);
          }
        }
      ),
      catchError(this.log.handleError(request, null))
    );
  }
}
