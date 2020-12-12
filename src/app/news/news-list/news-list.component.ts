import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NewsService } from 'src/app/shared/news.service';
import { News } from 'src/app/shared/news.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(public newsService: NewsService, public authService: AuthService) { }

  public isShowFavorites = false;
  public searchString = '';

  ngOnInit(): void {
    this.newsService.fetchNews();
  }

  logOut(): void {
    this.authService.LogOut();
  }

  showFavorites(): void {
    this.isShowFavorites = !this.isShowFavorites;
  }

  ifFavorites(): boolean {
    let counter = 0;
    for (const item of this.newsService.news) {
      if (item.isFavorite) {
        counter++;
      }
    }
    return (counter !== 0);
  }

}
