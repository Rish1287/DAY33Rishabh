import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductthingService } from 'src/app/services/productthing.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product = new Product(0,"","","",0,"",0,"","",0)
  categories : Productcategory[]
  constructor(
    private service : ProductthingService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.listOfCategory();
  }
  listOfCategory(){
    this.service.getAllCategory().subscribe(data => {
      this.categories = data
    })
  }

  onSubmit(): void{
    this.service.saveProduct(this.product).subscribe(() => {
      this.route.navigateByUrl("/shop")
    })
  }
  gotohome(){
    this.route.navigateByUrl("/")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }

}
