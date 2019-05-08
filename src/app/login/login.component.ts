import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthenticatService } from '../authenticat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials = {
                  username: '',
                  password: ''
                };
  constructor(private fb: FormBuilder, private appService: AuthenticatService, private router: Router ) { }

  ngOnInit() {
 this.loginForm = this.fb.group({
 username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
 password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
 });
  }
 login() {
  this.appService.authenticate(this.credentials, () => {
    // this.router.navigateByUrl('/home/(contentOulet:product)');
    this.router.navigate(['/home']);
  });
 }
}
