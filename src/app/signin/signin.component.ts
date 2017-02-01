import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService, SignInData } from 'angular2-token';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  private _signInData: SignInData = <SignInData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService, private router: Router) { }

  signIn() {
    this._output = null;

    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this._signInData = <SignInData>{};
        this._output = res;
      }, error => {
        this._signInData = <SignInData>{};
        this._output = error;
      }
    );

    this.router.navigate(['/home']);
  }

}
