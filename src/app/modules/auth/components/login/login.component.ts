import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants, UserDto } from 'src/app/data/types/User.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserDto = Constants;

  loginform: FormGroup;

  constructor(private fb: FormBuilder){
    this.loginform = this.fb.group({
      username: '',
      password: '',
      rememberMe: false,
    });
  }  

  ngOnInit(): void {}

}
