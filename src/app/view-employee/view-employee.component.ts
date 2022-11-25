import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  data=[
    {
      "name":"Sruthy",
      "designation":"Software Engineer Trainee",
      "salary":25000,
      "company":"NEST"
    },
    {
      "name":"Tania",
      "designation":"Software Engineer Trainee",
      "salary":25000,
      "company":"LULU"
    },
    {
      "name":"Ninu",
      "designation":"Software Engineer Trainee",
      "salary":25000,
      "company":"Muziris"
    },
    {
      "name":"Ashmi",
      "designation":"Software Engineer Trainee",
      "salary":25000,
      "company":"Big Formula"
    },
    {
      "name":"Abitta",
      "designation":"Software Engineer Trainee",
      "salary":25000,
      "company":"Suyati"
    }
  ]
}
