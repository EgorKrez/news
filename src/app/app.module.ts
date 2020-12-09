import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsComponent } from './news/news/news.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OpenNewsComponent } from './news/open-news/open-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    LoginComponent,
    OpenNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'news-list', component: NewsListComponent },
      { path: 'open-news', component: OpenNewsComponent },
]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
