import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.LPioAgzhHkoy8x-Kph3-d3hh2Wm4ZoqgCvm-eM7gXjo';
  public isAdmin: boolean;
  public checkId: number;

  constructor(private router: Router) { }

  public get logIn(): boolean {
    console.log(localStorage.getItem('auth_token') !== null);
    return (localStorage.getItem('auth_token') !== null);
  }

  LogIn(login: string, password: string): void {
    if (login === 'admin' && password === 'admin') {
      this.isAdmin = true;
      this.router.navigate(['news-list']);
      return localStorage.setItem('auth_token', this.token);
    }
    if (login === 'user' && password === 'user') {
      this.isAdmin = false;
      this.router.navigate(['news-list']);
      return localStorage.setItem('auth_token', this.token);
    }
  }

  LogOut(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
  }

  openNews(id: number): void {
    this.router.navigate(['open-news']);
    this.checkId = id;
  }

  showNews(): void {
    this.router.navigate(['news-list']);
  }

  addNews(): void {
    this.router.navigate(['add']);
  }

  editNews(id: number ): void {
    this.router.navigate(['edit']);
    this.checkId = id;
  }

}
