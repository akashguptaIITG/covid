import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';
import { IUser } from '../shared/interfaces/user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getErrorMessage() {
    return this.loginForm.get('username').hasError('required')
      ? 'You must enter a value'
      : this.loginForm.get('password').hasError('required')
      ? 'You must enter a value'
      : '';
  }

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      this.route.navigate(['/dashboard']);
    }
  }

  login(ngForm: IUser) {
    if (this.loginService.validateUser(ngForm)) {
      localStorage.setItem('access_token', 'token');
      localStorage.setItem('username', ngForm.username);
      this.route.navigate(['/dashboard']);
      this.toastrService.success('Logged in successfully!');
    } else {
      this.toastrService.warning('Please enter valid credentials!');
    }
  }

  resetForm() {
    this.loginForm.reset();
  }
}
