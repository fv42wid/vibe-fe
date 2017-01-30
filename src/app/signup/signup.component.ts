import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Registration } from './registration';
import { RegistrationService } from './registration.service';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ RegistrationService ]
})
export class SignupComponent {
  
  registration = new Registration;
  submitted: boolean = false;

  constructor(
    private registrationService: RegistrationService
  ) { }

  createRegistration(registration) {
    this.submitted = true;
    this.registrationService.createRegistration(registration)
        .subscribe(data => { return true },
        error => { console.log("Error creating registration");
              return Observable.throw(error); }
              )
  }

}
