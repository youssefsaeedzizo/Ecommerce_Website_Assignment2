import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
declare let $ : any
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _auth : AuthService,private _Router : Router){}
  ngAfterViewInit(): void {
   
    $("#my-loading").fadeOut("slow")

  }
  registerForm : FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    rePassword : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    phone: new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:this.rePasswordMatch})

  rePasswordMatch (form:any){
    let password = form.get("password")
    let rePassword = form.get("rePassword")
    if(password?.value == rePassword?.value){
      return null
    }
    else{
      rePassword?.setErrors({rePasswordError:"rePassword not match password"})
      return {rePasswordError:"rePassword not match password"}
    }
  }

  messageError : string = ""
  loading : boolean = false

  submitRegister(registerData:FormGroup){
    this.loading = true
    this._auth.register(this.registerForm.value).subscribe({
      next:(data)=>{
        this.loading = false
        if(data.message == "success"){
          this._Router.navigate(['/logIn'])
        }
      },
      error:(err)=>{
        this.messageError = err.error.message
        this.loading = false
      },
      complete:()=>{

      },
    })
  }

}
