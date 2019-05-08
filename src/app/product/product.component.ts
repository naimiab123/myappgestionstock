import { Component, OnInit } from '@angular/core';
 import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../produit.service';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../shared/data-model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product = new Product();
  public productsModel: DataModel[];
   public products: Product[];
   public productForm: FormGroup;

  constructor(public productService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute) {

  }
  ngOnInit() {

    this.products = this.route.snapshot.data.products;
   // console.log('data', this.products);
    this.productForm = this.fb.group({
      id: '',
      ref: ['', Validators.required],
      quantity: '',
      unitPrice: ''
    });
    this.productsModel = [ new DataModel('id', 'ID', 'number', true , [] ),
                           new DataModel('ref', 'Reference', 'string' , false, [] ),
                          new DataModel('quantity', 'Quantity', 'number' , false, [] ),
                          new DataModel('unitPrice', 'Unit Price', 'number' , false, [] ),
   ];

    }




  /*

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
 // this.operation = 'add';
  // this.loadProduct();
  this.products = this.route.snapshot.data.products;
  }
  loadProduct() {
 this.productService.getAll().subscribe(data => {
   this.products = data;
 },
 error => {console.log('An error was occured.'); },
 () => {console.log('loading product was done.'); }
 );
  }
  onAddProduct() {
    const p = this.productForm.value;
    console.log( p);
    this.productService.add(p).subscribe(result => {
    this.initProduct();
    this.loadProduct();
 }, error => console.log(' Problem to add product'));
  }
  deleteProduct() {
    console.log(this.selectedProduct.id);
   this.productService.delete(this.selectedProduct.id).subscribe(data => {
     // console.log(data);
    this.selectedProduct = new Product();
    this.loadProduct();

   }, error => console.log(error));
  }
  onEditProduct() {

  }
  updateProduct() {
  this.productService.update(this.selectedProduct).subscribe(result => {
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
  } */
}
