import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Angular2TokenService, RegisterData, SignInData } from 'angular2-token';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  private _registerData: RegisterData = <RegisterData>{};
  private _signInData: SignInData = <SignInData>{};
  private _output: any;
  submitted: boolean = false;

  constructor(
    private _tokenService: Angular2TokenService,
    private router: Router
  ) {}

  createRegistration() {
    this.submitted = true;
    this._output = null;
    
     this._tokenService.registerAccount(this._registerData).subscribe(
       res => {
         this._registerData = <RegisterData>{};
         this._output = res;
         this.router.navigate(['/signin']);
       }, error => {
         this._registerData = <RegisterData>{};
         this._output = error;
       }, () => { console.log(this._output); }
     );
  }

}
