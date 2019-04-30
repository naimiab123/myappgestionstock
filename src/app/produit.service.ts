import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './api.url.config';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 // private products: Product[];
// private host = 'http://localhost:8080/api/product';

  constructor( private http: HttpClient) { }
  getTheProducts(): Observable<any[]> {
  return  this.http.get<any[]>(API_URLS.PRODUCTS_URL);
  }
  addOneProduct(product: Product ): Observable<Product> {

    return this.http.post<Product>(API_URLS.PRODUCTS_URL, product);
  }

  updateProduct(product: Product): Observable<any> {
  return this.http.put(API_URLS.PRODUCTS_URL, product);
  }

  deleteProduct(ref: string) {
  return this.http.delete(API_URLS.PRODUCTS_URL + '/' + ref);
  }

}
