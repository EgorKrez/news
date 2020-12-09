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
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  public news: News[];
  public todos: Todo[];
  getNews(): Observable<News[]> {
    console.log('getNews');
    return this.http.get<News[]>('.app/data.json')
    .pipe(tap(news => this.news = news));
  }

  /* fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .pipe(tap(todos => this.todos = todos));
  } */

}
