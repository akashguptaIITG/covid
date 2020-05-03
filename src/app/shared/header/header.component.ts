import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.loginService.getLoggedInUser();
    }
  }
  logout() {
    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
      this.isLoggedIn = false;
    }
    this.route.navigate(['/login']);
  }
}
