import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { DataModel } from '../shared/data-model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { CrudService } from '../shared/crud-service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[];
  public title: string;
  public userForm: FormGroup;
  public usersModel: DataModel[];
  public user: User = new User();
  constructor(private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
   this.users = this.route.snapshot.data.users;

   // console.log('data', this.products);
    this.userForm = this.fb.group({

      username: ['', Validators.required]

    });
     this.usersModel = [ new DataModel('id', 'ID', 'number', true , [] ),
                           new DataModel('username', 'User', 'string' , false, [] ),
                          new DataModel('enable', 'Active', 'boolean' , true, [] )

   ];

  }

}
