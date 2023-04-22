import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  { path: 'Customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
{ path: 'Product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
,canActivate:[AuthGuard] },  // here set this line for router_guard
{ path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
