import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private principal: Principal;
  constructor(private store: Store<PrincipalState>) { }

  ngOnInit() {
    this.store.select('principal').subscribe( principal => {
      console.log('Params Principal: ', principal);
      this.principal = principal;
    });
  }
   hasRoleUser() {
     let hasRole = false;
     this.principal.authorities.forEach(item => {
  if (item.authority === 'ROLE_USER') {
    hasRole = true;
 }
     });
     return hasRole;
     }

     hasRoleAdmin() {
      let hasRole = false;
      this.principal.authorities.forEach(item => {
        if (item.authority === 'ROLE_ADMIN') {
          hasRole = true;
        }
      });
      return hasRole;
    }
   }

