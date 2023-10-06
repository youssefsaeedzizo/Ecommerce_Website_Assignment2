import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductdeatailsComponent } from './component/productdeatails/productdeatails.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductsComponent } from './component/products/products.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { logInOrNotGuard } from './log-in-or-not.guard';

const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"wishlist",canActivate:[authGuard],component:WishlistComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"checkout/:id",canActivate:[authGuard],component:CheckoutComponent},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent},
  {path:"logIn",component:LogInComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"register",canActivate:[logInOrNotGuard],component:RegisterComponent},
  {path:"products",canActivate:[authGuard],component:ProductsComponent},
  {path:"productdetails/:id",canActivate:[authGuard],component:ProductdeatailsComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
