import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login() : void {
    // if(this.username == 'admin' && this.password == 'admin'){
    //  this.router.navigate(["user"]);
    // }else {
    //   alert("Invalid credentials");
    // }
  }
}