import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as data from '../data/data.json';
import * as user from '../data/user.json';
import * as authData from '../data/auth.json';
import {News} from '../shared/news.service';

const NEWS_SERVER_URL = 'http://localhost:8080/news';
const USERS_SERVER_URL = 'http://localhost:8080/users';
const AUTH_SERVER_URL = 'http://localhost:8080/auth';

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<News[]>, next: HttpHandler): Observable<HttpEvent<News[]>> {
    if (request.url === NEWS_SERVER_URL) {
      return of(new HttpResponse({status: 200, body: ((data) as any).default}));
    } else if (request.url === USERS_SERVER_URL) {
      const username = request.params.get("username")
      const password = request.params.get("password")
      const userData = user.find(user => user.username === username && user.password === password);
      console.log('user wtf?', userData)
      if (!!userData) {
        return of(new HttpResponse({status: 200, body: ((userData) as any).default}));
      } else {
        return of(new HttpResponse({status: 404}));
      }
    } else if (request.url === AUTH_SERVER_URL) {
      return of(new HttpResponse({status: 200, body: ((authData) as any).default}));
    }
    return next.handle(request);
  }
}
