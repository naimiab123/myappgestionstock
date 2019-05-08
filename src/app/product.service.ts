import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products: Product[] = []; // {ref: '', quantity: 0, unitPrice: 0 };
  constructor() {
    const p1 = new Product(1, 'TV', 2 , 200.99);
    const p2 = new Product(2, 'CAMERA', 10 , 92500.99);
    const p3 = new Product(3, 'SMART-PHONE', 6 , 45600.99);
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);

  }
 public getProduct(): Product[] {
    return this.products;
 }
}
