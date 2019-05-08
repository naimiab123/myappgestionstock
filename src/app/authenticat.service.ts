import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './api.url.config';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { SAVE_PRINCIPAL } from './shared/save.principal.actions';
import { Principal } from './shared/principal';
import { PrincipalState } from './shared/principal.state';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatService {
public authenticated: boolean;
public principal: Principal;
  constructor(private http: HttpClient, private cookieService: CookieService, private store: Store<PrincipalState>) { }

  authenticate(credentials, callback) {
    if ( credentials) {

      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      // const headers = new HttpHeaders(credentials ? { authentication: 'Basic' + token } : {});

       this.http.get( API_URLS.USER_URL).subscribe( response => {
       //  this.principal = response.
        console.log('Reponse server:', response );
             if (response ) {
                  this.authenticated = true;
               //  response = Object.assign({principal: null}, response);
                // console.log('2-Reponse :', response );
                 this.store.dispatch({type: SAVE_PRINCIPAL, payload: response});
               // const user =
             } else {
               this.authenticated = false;
             }
             return callback && callback();
       });
    }    else {
      this.authenticated = false;
    }
  }
  logout(callback) {
    return callback && callback();
  }
}







/* authenticate(credentials, callback) {

  if ( credentials && credentials.username == 'user' && credentials.password == 'password1') {
      this.authenticated = true;

  } else {
    this.authenticated = false;

  }
  return callback && callback();
} */
