import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  empcode=""

  delete=()=>
  {
    let del:any={
      "empcode":this.empcode
    }
    // console.log(this.empcode)
    console.log(del)

  }
}
