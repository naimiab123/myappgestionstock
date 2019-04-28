import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  afficherSideBar() {
    this.showSideBar = !this. showSideBar;
    this.showSidebarChange.emit(this.showSideBar);
  }
}
