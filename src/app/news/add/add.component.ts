import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { News, NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

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

  // TODO: All CRUD oprtation move to service layer
  pushNews(): void {
    this.newNews = {
      source: {
        id: this.newsService.news.length,
        name: this.name
      },
      author: this.author,
      title: this.title,
      description: this.description,
      isFavorite: false,
      urlToImage: this.url,
      publishedAt: new Date(),
      content: this.content
    };
    this.newsService.news.push(this.newNews);
  }
}
