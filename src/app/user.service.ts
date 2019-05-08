import { Injectable } from '@angular/core';
import { CrudService } from './shared/crud-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './api.url.config';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CrudService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URLS.USER_CRUD_URL);
  }

  add(user): Observable<any> {
    return this.http.post(API_URLS.USER_CRUD_URL, user);
  }

  update(user): Observable<any> {
    return this.http.post(API_URLS.USER_CRUD_URL, user);
  }
  delete(id): Observable<any> {
    return this.http.delete(API_URLS.USER_CRUD_URL + '/' + id);
  }


}
