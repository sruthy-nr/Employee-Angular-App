import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  name=""
  designation=""
  salary=""
  phone=""
  email=""
  company=""
  yoe=""
  
  readValues=()=>
  {
    let employee:any={
      "empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"phone":this.phone,"email":this.email,"company":this.company,"yoe":this.yoe
    }
    console.log(employee)
  }

}
