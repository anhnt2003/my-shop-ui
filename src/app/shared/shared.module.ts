import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class SharedModule { }
