import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticatService } from '../authenticat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showSideBar: boolean;
  @Output()
  showSidebarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private appService: AuthenticatService, private router: Router) { }

  ngOnInit() {
  }
  afficherSideBar() {
    this.showSideBar = !this. showSideBar;
    this.showSidebarChange.emit(this.showSideBar);
  }
  logout() {
 this.appService.logout(() => {
 this.router.navigateByUrl('/login');
 });
  }
}
