import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CrudService } from '../crud-service';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

   @Input()
    title: string;

   @Input()
   data: any;

  @Input()
   service: CrudService;

  @Input()
   initItem: any;

  @Input()
   initForm: FormGroup;

  @Input()
   dataModelList: DataModel[];

   crudForm: FormGroup;

   public operation = 'add';

   selectedItem: any;





  constructor( private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  this.init();
  this.loadData();
  }
  loadData() {
    this.service.getAll().subscribe(
      mydata => {this.data = mydata; },
      error => { console.log('An error was occured.'); },
      () => { console.log('loading data was done.'); }
    );
  }
  add() {
    const p = this.crudForm.value;
    // console.log( p);
    this.service.add(p).subscribe(result => {
    this.init();
    this.loadData();
 }, error => console.log('Problem to add'));
  }
  delete() {
    console.log(this.selectedItem.id);
   this.service.delete(this.selectedItem.id).subscribe(data => {
     // console.log(data);
    this.selectedItem = this.initItem;
    this.loadData();

   }, error => console.log(error));
  }

  update() {
  this.service.update(this.selectedItem).subscribe(result => {
    this.init();
  }, error => console.log(error));
  }
  init() {
    this.selectedItem = this.initItem;
    this.createForm();
  }
  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

}
