import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidator} from '../common/validators/username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
   account: new FormGroup({
     username : new FormControl('', [
       Validators.required,
       Validators.minLength(3),
       UsernameValidator.cannotContainSpace
     ], UsernameValidator.shouldBeUnique),
     password : new FormControl('', Validators.required)
   })
  });

  get username(): any{
    return this.form.get('username');
  }

  login(): void{
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
