import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
  salesPersonList: Salesperson [] =[
    new Salesperson("Name1","last1","email1@gmail.com",30000,"19"),
    new Salesperson("Name2","Last2","email2@gmail.com",40000,"200"),
    new Salesperson("Name3", "Last3","email3@gmail.com", 19900,"250"),
    new Salesperson("Name4", "Last4","email4@gmail.com", 20000,"170"),
    new Salesperson("Name5", "Last5","email5@gmail.com", 21000,"100"),
    new Salesperson("Name6", "Last6","email6@gmail.com", 66000,"10"),
  ]

  formModel: Salesperson = new Salesperson("","","",0,"")

  ngOnInit(): void {
    console.log(this.formModel)
  }
  onSubmit():void{
    this.salesPersonList.push(this.formModel)
  }

}
