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
  // TODO: make normal naming for variables.
  public p: News[] = this.newsService.news;
  public searchString = '';

  ngOnInit(): void {
  }

  // TODO: remove after finishing development process.
  showString(): void {
    console.log(this.searchString);
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
    /* for (let i = 0; i < this.newsService.news.length; i++) {
      if (this.newsService.news[i].isFavorite) {
        counter++;
      }
    } */
    // TODO: replace to reduce method
    for (let item of this.newsService.news) {
      if (item.isFavorite) {
        counter++;
      }
    }
    return (counter !== 0);
  }

}
