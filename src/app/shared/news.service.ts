import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export interface News {
   source: {
    id: number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  isFavorite: boolean;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  public news: News[];

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('.app/data.json')
    .pipe(tap(news => this.news = news));
  }


}
