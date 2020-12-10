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

  public news: News[] = [
    {source: {id: 1, name: 'One America News Network'}, author: 'Egor', title: 'Column: Getting mighty crowded searching for market elbow room: Mike Dolan', description: 'By Mike Dolan LONDON - The biggest fear in markets is often of market behaviour itself - and it s enough to scare investors about overcrowded trades next year as an overwhelmingly bullish The post Column: Getting mighty crowded - searching for market', isFavorite: false, urlToImage : 'https://mms.businesswire.com/media/20201209005146/en/845318/23/BitOoda_Logo_1.jpg', publishedAt: new Date('2020-12-09T12:00:39Z'), content: 'BOSTON--(BUSINESS WIRE)--Next-generation digital asset financial services firm BitOoda announced it has hired Ben Pratt as the companys new Chief Power Strategist as the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars] the firm continues to drive the a… [+2328 chars]'},
    {source: {id: 2, name: 'CoinDesk'}, author: 'Muyao Shen', title: 'Bitwise’s Crypto Index Fund Becomes Available To U.S.', description: 'Bitwise has launched the first crypto index fund available to investors in the U.S.', isFavorite: false, urlToImage : 'https://static.coindesk.com/wp-content/uploads/2020/12/brown-eggs-3217675_1920-1200x628.jpg', publishedAt: new Date('2020-12-09T12:00:39Z'), content: 'Bitwise Asset Management, a provider of cryptocurrency index funds to professional investors, announced Wednesday that its 10 Crypto Index Fund is now available to U.S. investors as a public-traded c… [+3007 chars]'},
    {source: {id: 3, name: 'CoinDesk'}, author: 'Omkar Godbole', title: 'Bitcoin’s Options Market Skews Bearish as Spot', description: 'Bitcoin s fall toward $18,000 has revived demand for short-dated put options as a way to hedge downside risk.', isFavorite: false, urlToImage : 'https://static.coindesk.com/wp-content/uploads/2020/12/wed-btc-1200x628.png', publishedAt: new Date('2020-12-09T12:00:30Z'), content: 'Bitcoin’s options market has flipped bearish for the short term, as demand rises for ways to hedge against further sell-offs in the spot market. \r\nThe top cryptocurrency by market value fell to $17,6… [+3828 chars]'},
  ]; 
  /* getNews(): Observable<News[]> {
    console.log('getNews');
    return this.http.get<News[]>('.app/data.json')
    .pipe(tap(news => this.news = news));
  } */

  /* fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .pipe(tap(todos => this.todos = todos));
  } */

}
