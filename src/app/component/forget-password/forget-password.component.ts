import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
declare let $ : any;
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _auth : AuthService,private _Router : Router){
    
  }
  forgetPasswordEmailForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
  })
  resetCodeForm : FormGroup = new FormGroup({
    resetCode:new FormControl(null,[Validators.required , Validators.pattern(/^[0-9]+$/)]),
  })

  messageError : string = ""
  loading : boolean = false
  sendResetCode(data:FormGroup){
    this.loading = true
    console.log(data.value);
    
    this._auth.resetCode(data.value).subscribe({
      next:(req)=>{
        this._Router.navigate(["/resetPassword"])
        this.loading = false
        
      },
      error:(err)=>{
        this.messageError = err.error.message
        this.loading = false
      },

    })
  }  

  ngAfterViewInit(): void {
    $("#my-loading").fadeOut("slow")

    
  }
  submitForgetPassword(registerData:FormGroup){
    this.loading = true
    this._auth.forgetPassword(this.forgetPasswordEmailForm.value).subscribe({
      next:(req)=>{
        this.loading = false
        
        $(".forgetPassword").fadeOut("500",()=>{$(".restCode").fadeIn("500")})
        
 
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
