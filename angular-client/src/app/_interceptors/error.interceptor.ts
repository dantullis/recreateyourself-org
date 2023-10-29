import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

//import { TokenStorageService } from '@app/_services';

export class HttpError {
  static badRequest = 400;
  static unauthorized = 401;
  static forbidden = 403;
  static notFound = 404;
  static timeOut = 408;
  static conflict = 409;
  static internalServerError = 500;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    // private tokenStorageService: TokenStorageService
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const loginPath = '/auth-login';

    return next.handle(request).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        // Operation failed; error is an HttpErrorResponse
        error: err => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case HttpError.badRequest: // 400
                console.error('%c Bad Request 400');
                break;
              case HttpError.unauthorized: // 401
                console.error('%c Not authorized 401');
                // this.tokenStorageService.signOut();
                this.router.navigate(['/errors/error-401']);
                // window.location.href = loginPath;
                break;
              case HttpError.forbidden: // 403
                console.error('%c Forbidden 403');
                // this.tokenStorageService.signOut();
                this.router.navigate(['/errors/error-403']);
                break;
              case HttpError.notFound: // 404
                console.error('%c Not found 404');
                this.router.navigate(['/errors/error-404']);
                break;
              case HttpError.timeOut: // 408
                // Handled in AnalyticsExceptionHandler
                console.error('%c TimeOut 408');
                break;
              case HttpError.conflict: // 409
                // Handled in AnalyticsExceptionHandler
                console.error('%c Conflict 409');
                break;
              case HttpError.internalServerError: // 500
                console.error('%c big bad 500');
                this.router.navigate(['/errors/error-500']);
                break;
            }
          }
        },
      })
    );
  }
}

export const errorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
