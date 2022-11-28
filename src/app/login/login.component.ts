import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username=""
  password=""

  login=()=>
  {
    let log:any={
      "username":this.username,
      "password":this.password
    }
    console.log(log)
    if(this.username=="admin" && this.password=="12345")
    {
      alert("Valid login")
    }
    else
    {
      alert("Invalid credentials")
    }
  }
}
