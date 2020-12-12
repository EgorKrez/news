import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as data from './data.json';
import * as userData from './user.json';
import * as authData from './auth.json';

const NEWS_SERVER_URL = 'http://localhost:8080/news';
const USERS_SERVER_URL = 'http://localhost:8080/users';
const AUTH_SERVER_URL = 'http://localhost:8080/auth';

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === NEWS_SERVER_URL) {
      return of(new HttpResponse({status: 200, body: ((data) as any).default}));
    } else if (request.url === USERS_SERVER_URL) {
      const username = request.headers.get("username")
      const password = request.headers.get("password")
      const user = (userData as any).default.find(user => user.username === username && user.password === password);
      if (user) {
        return of(new HttpResponse({status: 200, body: (user)}));
      } else {
        return of(new HttpResponse({status: 404}));
      }
    } else if (request.url === AUTH_SERVER_URL) {
      const username = request.headers.get("username")
      const jwt = (authData as any).default.find(jwt => jwt.username === username)
      if (jwt) {
        return of(new HttpResponse({status: 200, body: (jwt)}));
      } else {
        return of(new HttpResponse({status: 401}));
      }
    }
    return next.handle(request);
  }
}
