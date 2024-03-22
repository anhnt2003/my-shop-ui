import { Component, ViewChild } from '@angular/core';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public username: any;
  public selectedValues: any;
  public firstname: any;
  public lastname: any;
  public createpassword: any;
  public confirmpassword: any;
  passwordMismatch: boolean = false;

  @ViewChild('createPasswordInput') createPasswordInput: any;

  checkPasswordMatch(){
    if(this.createpassword !== this.confirmpassword){
      this.passwordMismatch = true;

      this.createPasswordInput.nativeElement.focus();
    }
    else{
      this.passwordMismatch = false;
    }
  }
}
