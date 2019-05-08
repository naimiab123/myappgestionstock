import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './api.url.config';
import { Product } from './product';
import { Observable } from 'rxjs';
import { CrudService } from './shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService implements CrudService {
 // private products: Product[];
// private host = 'http://localhost:8080/api/product';

  constructor( private http: HttpClient) { }
  getAll(): Observable<any[]> {
  return  this.http.get<any[]>(API_URLS.PRODUCTS_URL);
  }
  add(product: Product): Observable<Product> {
    console.log('product:', product);
    return this.http.post<Product>(API_URLS.PRODUCTS_URL, product);
  }

  update(product: Product): Observable<any> {
  return this.http.put(API_URLS.PRODUCTS_URL, product);
  }

  delete(id: number) {
  return this.http.delete(API_URLS.PRODUCTS_URL + '/' + id);
  }

}
