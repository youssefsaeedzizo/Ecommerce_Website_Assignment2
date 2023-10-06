import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductsComponent } from './component/products/products.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductdeatailsComponent } from './component/productdeatails/productdeatails.component';
import { MainsliderComponent } from './component/mainslider/mainslider.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategorySliderComponent } from './component/category-slider/category-slider.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    ProductsComponent,
    LogInComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ProductdeatailsComponent,
    MainsliderComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CategorySliderComponent,
    CheckoutComponent,
    WishlistComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
