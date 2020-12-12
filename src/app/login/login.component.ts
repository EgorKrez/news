import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public addForm: FormGroup;

  login = '';
  password = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.addForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  Login(): void{
    this.authService.LogIn(this.login, this.password);
  }
}
