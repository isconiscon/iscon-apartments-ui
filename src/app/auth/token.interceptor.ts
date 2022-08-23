import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    console.log('Auth toke in interceptor == ', currentUser);
    //Check for url. If it is login url then return
    if (request.url.includes('/login')) {
      return next.handle(request);
    }
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`,
        },
      });
    }

    return next.handle(request);
    //   return next.handle(request).pipe(
    //     catchError((err) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //         }
    //       }
    //       return throwError(err);
    //     })
    //   );
  }
}
