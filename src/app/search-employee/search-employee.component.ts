import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  empcode=""

  search=()=>
  {
    let data:any={
      "empcode":this.empcode
    }
    // console.log(this.empcode)
    console.log(data)

  }
}
