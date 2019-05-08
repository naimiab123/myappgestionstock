import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';

import { ProductResolverService } from './resolver/product-resolver.service';
import { UserComponent } from './user/user.component';
import { UserResolverService } from './resolver/user-resolver';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'home',
    component: HomeComponent,
    children: [
            {  path: 'dashboard',
              component: DashboardComponent,
              outlet: 'contentOulet'
            },
            {
              path: 'product',
              component: ProductComponent,
              resolve: {
                        products: ProductResolverService
                      },
              outlet: 'contentOulet'
              },
              {
                path: 'user',
                component: UserComponent,
                resolve: {
                          users: UserResolverService
                          },
                outlet: 'contentOulet'
              }
    ]

  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolverService, UserResolverService ]
})
export class AppRoutingModule { }
