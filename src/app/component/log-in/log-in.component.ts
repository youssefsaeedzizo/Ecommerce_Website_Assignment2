import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
declare let $  :any
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private _auth : AuthService,private _Router : Router){

    
  }
  logInForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  })
ngOnInit(): void {

  $("#my-loading").fadeOut("slow")
  
}
  messageError : string = ""
  loading : boolean = false
  
  submitLogIn(registerData:FormGroup){
    this.loading = true
    this._auth.login(this.logInForm.value).subscribe({
      next:(data)=>{
        this.loading = false
        if(data.message == "success"){
          this._auth.saveUserData(data.user)  
          localStorage.setItem("token",data.token)        
          this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        this.messageError = err.error.message
        this.loading = false
        console.log(err.error.message);
        
      },
      complete:()=>{

      },
    })
  }
}
