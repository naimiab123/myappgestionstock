import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHideSideBar = false;
  constructor() { }

  ngOnInit() {
   // this.onShowSideBarChange(this.showHideSideBar);
  }


  onShowSideBarChange(showSideBarChange) {
    this.showHideSideBar = showSideBarChange;
  }
}
