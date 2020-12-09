import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-open-news',
  templateUrl: './open-news.component.html',
  styleUrls: ['./open-news.component.scss']
})
export class OpenNewsComponent implements OnInit {

  constructor(public newsService: NewsService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  showNews(): void {
    this.authService.showNews();
  }

}
