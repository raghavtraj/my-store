import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';



const appRoutes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add-product',      component: AddproductComponent },
  { path: 'product-detail',      component: ProductdetailsComponent },
  { path: 'product-detail/:id',      component: ProductdetailsComponent },
  { path: 'edit/:id',      component: AddproductComponent },
  { path: 'cart',      component: CartComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddproductComponent,
    ProductdetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
