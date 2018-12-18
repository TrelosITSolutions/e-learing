import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParentAuthService } from 'app/services/parent/parentAuth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private parentAuthService: ParentAuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required)
      });
  }
  onSubmit(){
    console.log(this.registerForm);
    const credentials ={
      'email': this.registerForm.value.email,
      'password': this.registerForm.value.password
    }
      console.log('admin');
      this.parentAuthService.register(credentials).subscribe(
        (data) => {console.log(data)},
        (error) => {console.log(error)}
      );
    }
  }
