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
  public p: News[] = this.newsService.news;

  ngOnInit(): void {
  }


  logOut(): void {
    this.authService.LogOut();
  }

  showFavorites(): void {
    this.isShowFavorites = !this.isShowFavorites;
    console.log(document.querySelector('app-news'));
  }

  ifFavorites(): boolean {
    let counter = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.newsService.news.length; i++) {
      if (this.newsService.news[i].isFavorite === true) {
        counter++;
      }
    }
    if (counter === 0) {
      return false;
    }
    else {
      return true;
    }
  }

}
