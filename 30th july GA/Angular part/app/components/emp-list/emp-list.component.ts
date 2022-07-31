import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees : Employee[]
  constructor(private service : ManagementServiceService) { }

  ngOnInit(): void {
    this.listOfEmployee()
  }

  listOfEmployee() {
    this.service.getAllEmployee().subscribe(data=>{
      console.log(data)
      this.employees = data

    }
    )
  }

}
