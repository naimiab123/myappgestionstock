import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { ProductResolverService } from './resolver/product-resolver.service';
>>>>>>> crud_product

const routes: Routes = [
  {path: 'product',
  component: ProductComponent,
 resolve: {
   products: ProductResolverService
  }
},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolverService]
})
export class AppRoutingModule { }
