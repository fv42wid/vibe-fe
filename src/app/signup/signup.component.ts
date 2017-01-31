import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  private _registerData: RegisterData = <RegisterData>{}
  private _output: any;;
  submitted: boolean = false;

  constructor(
    private _tokenService: Angular2TokenService
  ) {}

  createRegistration() {
    this.submitted = true;
    this._output = null;
    
     this._tokenService.registerAccount(this._registerData).subscribe(
       res => {
         this._registerData = <RegisterData>{};
         this._output = res;
       }, error => {
         this._registerData = <RegisterData>{};
         this._output = error;
       }
     );
  }

}
