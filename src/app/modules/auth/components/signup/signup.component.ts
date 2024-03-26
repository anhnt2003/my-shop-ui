import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, UserDto } from 'src/app/data/types/User.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  user: UserDto = Constants;
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
    });
  }  

  ngOnInit(): void {}

  // @ViewChild('createPasswordInput') createPasswordInput: any;

  // checkPasswordMatch(){
  //   if(this.user.createpassword !== this.user.confirmpassword){
  //     this.passwordMismatch = true;

  //     this.createPasswordInput.nativeElement.focus();
  //   }
  //   else{
  //     this.passwordMismatch = false;
  //   }
  // }
}
