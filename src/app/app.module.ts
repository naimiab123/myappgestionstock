import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import {StoreModule} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Xhinterceptor } from './xhinterceptor';
import { UserComponent } from './user/user.component';
import { principalReducer } from './shared/principal.reducer';
import { CrudComponent } from './shared/crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    UserComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Xhinterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
