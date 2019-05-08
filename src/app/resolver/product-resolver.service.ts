import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from '../produit.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private produitService: ProduitService) { }
  resolve() {
  return this.produitService.getAll();
  }
}
