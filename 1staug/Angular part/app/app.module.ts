import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const route : Routes =[
  {path : '',component:WelcomeComponent},
  {path:'product',component:ProductListComponent},
  {path:'category',component:CategoryListComponent},
  {path:'shop',component:ProductListComponent},
  {path:'merchant',component:AddProductComponent},
  {path:'shoppingcart',component:ShoppingCartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    WelcomeComponent,
    AddCartComponent,
    AddProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
