import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  LogIn(login, password) {
    if (login === 'admin' && password === 'admin') {
      console.log('NAVIGATE');
      this.router.navigate(['news-list']);
    }
  }
}
