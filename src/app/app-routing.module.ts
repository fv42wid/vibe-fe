import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { CauseListComponent } from './cause/cause-list/cause-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'causes', component: CauseListComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
