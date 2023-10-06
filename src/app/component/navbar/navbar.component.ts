import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private _auth:AuthService ,private _CartService : CartService){}

  isLogIn:any = this._auth.userData 
  countNumber : number = 0 ;
  logout(){
    this._auth.logOut()
  }

  ngOnInit(): any {
    this._CartService.countCart.subscribe((data)=>{
      this.countNumber = data;
    })

    this._auth.userData.subscribe({
      next:()=>{
        this.isLogIn = this._auth.userData.getValue()
      }
    })
    
  }
}
