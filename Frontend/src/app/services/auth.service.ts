import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    this.isLogin.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLogin.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

}
