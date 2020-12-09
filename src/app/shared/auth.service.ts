import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAdmin: boolean;
  public checkId: number;

  constructor(private router: Router) { }

  LogIn(login, password): void {
    if (login === 'admin' && password === 'admin') {
      this.isAdmin = true;
      this.router.navigate(['news-list']);
    }
    if (login === 'user' && password === 'user') {
      this.isAdmin = false;
      this.router.navigate(['news-list']);
    }
    console.log(this.isAdmin);
  }

  LogOut(): void {
    this.router.navigate(['login']);
  }

  openNews(id): void {
    this.router.navigate(['open-news']);
    this.checkId = id;
  }

  showNews(): void {
    this.router.navigate(['news-list']);
  }

}
