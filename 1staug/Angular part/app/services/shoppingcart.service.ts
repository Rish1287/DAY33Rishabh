import { Injectable } from '@angular/core';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  items : Product[] = []
  constructor() { }
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
