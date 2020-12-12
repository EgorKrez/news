import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';
import { AuthService } from 'src/app/shared/auth.service';
import { News, NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public addForm: FormGroup;
  name = '';
  title = '';
  author = '';
  description = '';
  url = '';
  content = '';



  constructor(public newsService: NewsService, public authService: AuthService) { }

  public newNews: News;

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.addForm = new FormGroup({
      name: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      url: new FormControl(),
      content: new FormControl(),
    });
  }

  pushNews(): void {
    this.newNews = {
      source: {
        id: this.newsService.news[this.authService.checkId - 1].source.id,
        name: this.name
      },
      author: this.author,
      title: this.title,
      description: this.description,
      isFavorite: this.newsService.news[this.authService.checkId - 1].isFavorite,
      urlToImage: this.url,
      publishedAt: new Date(),
      content: this.content
    };
    this.newsService.news[this.authService.checkId - 1] = this.newNews;
  }

}
