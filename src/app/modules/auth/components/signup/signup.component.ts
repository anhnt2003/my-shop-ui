import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/data/types/User.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  user: UserDto | undefined;
  passwordMismatch: boolean = false;

  signupform: FormGroup;

  constructor(private fb: FormBuilder){
    this.signupform = this.fb.group({
      firstname:['',Validators.required],
      lastname: ['',Validators.required],
      username: ['',Validators.required],
      createpassword: ['',Validators.required],
      confirmpassword: ['',Validators.required],
      agree: [false, Validators.required],
    }, {Validators: this.passwordMatchValidator});
  }  

  ngOnInit(): void {}

  passwordMatchValidator(passcheck: FormGroup){
    const CreatePassword = passcheck.get('createpassword');
    const ConfirmPassword = passcheck.get('confirmpassword');

    if(CreatePassword && ConfirmPassword){
      const Password1= CreatePassword.value;
      const Password2 = ConfirmPassword.value;

      return Password1 === Password2 ? null : {passwordMismatch: true};

    }
    return null;
  }

}
