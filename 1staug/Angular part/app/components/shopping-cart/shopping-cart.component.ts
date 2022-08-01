import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = this.shoppingcartService.getItems()
  constructor(private shoppingcartService : ShoppingcartService) { }

  ngOnInit(): void {
  }
  clearShoppingCart() {
    this.items = [];
    return this.items;
  }

}
