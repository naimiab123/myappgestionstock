import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../produit.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private productForm: FormGroup;
  private product: Product;
  public  selectedProduct: Product;
  public operation = 'add';
  constructor(private productService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
 this.initProduct();
  // this.loadProduct();
  this.products = this.route.snapshot.data.products;
  }
  loadProduct() {
 this.productService.getTheProducts().subscribe(data => {
   this.products = data;
 },
 error => {console.log('An error was occured.'); },
 () => {console.log('loading product was done.'); }
 );
  }
  onAddProduct() {
    this.product = this.productForm.value;
    this.productService.addOneProduct(this.product).subscribe(result => {
    this.initProduct();
    this.loadProduct();
 }, error => console.log(error));
  }
  deleteProduct() {
    console.log(this.selectedProduct.id);
   this.productService.deleteProduct(this.selectedProduct.id).subscribe(data => {
     // console.log(data);
    this.selectedProduct = new Product();
    this.loadProduct();

   }, error => console.log(error));
  }
  onEditProduct() {

  }
  updateProduct() {
  this.productService.updateProduct(this.selectedProduct).subscribe(result => {
    this.initProduct();
  }, error => console.log(error));
  }
  initProduct() {
    this.selectedProduct = new Product();
    this.createForm();
  }
  createForm() {
    this.productForm = this.fb.group({
      id: '',
      ref: ['', Validators.required],
      quantity: '',
      unitPrice: ''
    });
  }
}
