import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Registration } from './registration';

@Injectable()
export class RegistrationService{
  private registrationUrl = 'http://35.165.61.165/auth/confirmation.json';

  constructor(
    private http: Http
  ) {}

  createRegistration(registration) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.registrationUrl, JSON.stringify(registration),
           { headers: headers })
           .map((res: Response) => res.json());
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} = ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
  }
}
