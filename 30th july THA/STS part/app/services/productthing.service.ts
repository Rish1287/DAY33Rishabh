import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { Productcategory } from '../common/productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductthingService {

  producturl = "http://localhost:8080/api/prod"
  categoryurl = "http://localhost:8080/api/category"
  constructor(private httpclient : HttpClient) { }
  getAllProduct() : Observable<Product[]>{
    // console.log(this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response=> response._embedded.products)))
    return this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response=> response._embedded.products))
  }
  getAllCategory() : Observable<Productcategory[]>{
    // console.log(this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response=>response._embedded.productCategories)))
    return this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response=>response._embedded.productCategories))
  }
}

interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}

interface getCategoryResponse{
  _embedded : {
    productCategories :Productcategory[]
  }
}