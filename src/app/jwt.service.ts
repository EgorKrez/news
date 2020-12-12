import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() {
  }

  public getUsernameFromJWT() {
    try {
      const jwt = localStorage.getItem('auth_token')
      let base64Url = jwt.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload).username;
    } catch (error) {
      console.log('getUsernameFromJWT err:', error)
      return null;
    }
  }
}
