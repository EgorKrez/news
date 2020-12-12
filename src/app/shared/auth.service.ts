import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/user.model";
import {Auth} from "./models/auth.model";
import {JwtService} from "../jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private $logIn: boolean;
  private $isAdmin: boolean;
  private readonly AUTH_SERVER_URL = "http://localhost:8080/auth"


  public checkId: number;

  constructor(private router: Router, private http: HttpClient, private jwtService: JwtService) {
  }

  public get logIn(): boolean {
    this.$logIn = this.$logIn || this.jwtService.getUsernameFromJWT() === 'user' || this.jwtService.getUsernameFromJWT() === 'admin';
    return this.$logIn;
  }

  public get isAdmin(): boolean {
    return (this.jwtService.getUsernameFromJWT() === 'admin');
  }

  LogIn(username: string, password: string): void {
    const user = this.getUserRequest(username, password)
    if (user) {
      const jwt = this.getAuthRequest(user.username)
      this.$logIn = true;
      this.$isAdmin = user.isAdmin;
      localStorage.setItem("auth_token", jwt.jwt);
      this.router.navigate(['news-list']);
    } else {
      console.log('user unauthorized')
      this.router.navigate(['login']);
    }
  }

  private getUserRequest(username: string, password: string): User {
    let result: User;
    this.http.get<User>(`http://localhost:8080/users`, {
      headers: {
        'username': username,
        'password': password
      }
    }).subscribe(user => {
      result = user;
      return result;
    })
    return result;
  }

  private getAuthRequest(username: string): Auth {
    let result: Auth;
    this.http.get<Auth>(this.AUTH_SERVER_URL, {
      headers: {
        'username': username,
      }
    }).subscribe(jwt => {
      result = jwt;
      return result;
    });
    return result;
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

  editNews(id: number): void {
    this.router.navigate(['edit']);
    this.checkId = id;
  }

}
