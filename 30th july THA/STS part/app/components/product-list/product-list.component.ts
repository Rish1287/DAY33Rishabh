import { Component, OnInit } from '@angular/core';
import { ProductThingService } from 'src/app/services/productthing.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private service : ProductThingService ) { }

  formModel : Product = new Product(0,"","","",0,"",0,"","",0)

  ngOnInit(): void {
    this.listOfProducts()
  }
  onSubmit(): void{
    this.products.push(this.formModel)
  }
  listOfProducts(){
    this.service.getAllProduct().subscribe(data => {
      console.log(data)
      this.products = data
    })
  }
}