import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() author: string;
  @Input() title: string;
  @Input() description: string;
  @Input() isFavorite: boolean;
  @Input() urlToImage: string;
  @Input() publishedAt: Date;
  @Input() content: string;


  constructor(public newsService: NewsService, public authService: AuthService) { }

  ngOnInit(): void {
    // TODO: remove after finishing development process;
    /* this.newsService.getNews().subscribe((data) => this.newsService.news = data);
    console.log('ngOnInit'); */
  }

  addToFavorites(): void {
    this.newsService.news[this.id - 1].isFavorite = !this.newsService.news[this.id - 1].isFavorite;
  }

  openNews(id: number): void {
    this.authService.openNews(id);
  }

  removeNews(id: number): void {
    this.newsService.news.splice(id - 1, 1);
    for (let i = id - 1; i < this.newsService.news.length; i++) {
    this.newsService.news[i].source.id = this.newsService.news[i].source.id - 1;
    }
  }

  editNews(id: number): void {
    this.authService.editNews(id);
  }
}
