import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

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
  public news: News[];

  private readonly NEWS_URL = 'http://localhost:8080/news';

  constructor(public http: HttpClient) {
  }

  fetchNews(): void {
    console.log('fetchNews');
    this.http.get<News[]>(this.NEWS_URL).subscribe(data => {
      this.news = data;
    });
  }
}
