import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {Auth} from "./models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(): boolean {

    if (this.authservice.logIn) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }

}
