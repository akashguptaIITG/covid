import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginData: IUser[];
  constructor() {
    this.getUsers();
  }
  getUsers(): IUser[] {
    this.loginData = [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
      },
    ];
    return this.loginData;
  }

  validateUser(user: IUser): boolean {
    return this.loginData.some(
      (u) =>
        user.username.toLowerCase() === u.username.toLowerCase() &&
        user.password === u.password
    );
  }
  isLoggedIn() {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }
  getLoggedInUser(): string {
    return localStorage.getItem('username');
  }
}
