import { UserListComponent } from './user/user-list/user-list.component';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './admins/signin/signin.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { AdminService } from './admins/admin.service';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },

  { path: 'product-list', component: ProductListComponent, canActivate: [AdminService] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AdminService] },
  { path: 'category-add', component: CategoryAddComponent, canActivate: [AdminService] },
  { path: 'category-list', component: CategoryListComponent, canActivate: [AdminService] },
  { path: 'brand-list', component: BrandListComponent, canActivate: [AdminService] },
  { path: 'brand-add', component: BrandAddComponent, canActivate: [AdminService] },
  { path: 'user-list', component: UserListComponent, canActivate: [AdminService] },
  { path: 'order-list', component: OrderListComponent, canActivate: [AdminService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
