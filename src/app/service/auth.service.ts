import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = "https://ecommerce.routemisr.com"
data : string = ""
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("token")){
      let token : string | null = localStorage.getItem("token")
      if(token != null){
        this.data = jwtDecode(token)
        this.saveUserData(this.data)
        

      }
    }
   }
   forgetPassword(data:any){
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,data)

   }
   logOut(){
    localStorage.removeItem("token")
    this.saveUserData(null)
    this._Router.navigate(["/logIn"])
   }

register(data:any):Observable<any>{
  return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,data)
}
resetCode(data:any){
  return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,data)

}
login(data:any):Observable<any>{
  return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,data)
}
resetPassword(data:any):Observable<any>{
  return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,data)
}
userData : BehaviorSubject<any> = new BehaviorSubject(null)

saveUserData(data:any){
  this.userData.next(data)
}

}
