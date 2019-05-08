import { Component, OnInit } from '@angular/core';
import { AuthenticatService } from './authenticat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private appService: AuthenticatService, private router: Router) {}
  ngOnInit() {
    if (!this.appService.authenticated) {
         this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
    }
  }

}
