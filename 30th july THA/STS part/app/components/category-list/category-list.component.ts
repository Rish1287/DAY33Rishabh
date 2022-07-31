import { Component, OnInit } from '@angular/core';
import { ProductthingService } from 'src/app/services/productthing.service';
import { Productcategory } from 'src/app/common/productcategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category : Productcategory[]
  constructor(private service : ProductthingService) { }
  formModel : Productcategory = new Productcategory(0,"")

  ngOnInit(): void {
    this.listOfCategory()
  }
  onSubmit(): void{
    this.category.push(this.formModel)
  }
listOfCategory(){
  this.service.getAllCategory().subscribe(data=>{
    this.category=data
  })
}
}