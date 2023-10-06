import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _auth : AuthService,private _Router : Router){
    
  }
  resetPasswordForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    newPassword:new FormControl(null,[Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  })

  messageError : string = ""
  loading : boolean = false
  
  submitResetPassword(data:FormGroup){
    this.loading = true
    this._auth.resetPassword(data.value).subscribe({
      next:(data)=>{
        this.loading = false
        console.log(data);
        this._Router.navigate(['/logIn'])
        
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
