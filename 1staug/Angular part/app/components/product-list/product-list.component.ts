import { Component, OnInit } from '@angular/core';
import { ProductthingService } from 'src/app/services/productthing.service';
import { Product } from 'src/app/common/product';
import { Router } from '@angular/router';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private service : ProductthingService ,
    private route : Router,
    private shoppingcartservice : ShoppingcartService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }
  addToCart(product:Product) {
    this.shoppingcartservice.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  listOfProducts(){
    this.service.getAllProduct().subscribe(data => {
      console.log(data)
      this.products = data
    })
  }
  addProduct(){
    this.route.navigateByUrl("/merchant")
  }
  gotohome(){
    this.route.navigateByUrl("/")
  }
}