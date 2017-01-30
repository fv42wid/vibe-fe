import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CauseListComponent } from './cause/cause-list/cause-list.component';
import { CauseService } from './cause/cause.service';

import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';

import { RegistrationService } from './signup/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CauseListComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    CauseService,
    RegistrationService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
