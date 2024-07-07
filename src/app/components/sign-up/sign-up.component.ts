import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.router.navigateByUrl('landingpage');
    }
  }
}
