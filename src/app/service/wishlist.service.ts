import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl:string = "https://ecommerce.routemisr.com"

  WishListProductsIds : string[] = []
  WishListProducts= new BehaviorSubject<string[]>([])
  constructor(private _HttpClient : HttpClient , private _CartService : CartService) {
    this.getAllProductsInWishList().subscribe({
      next: (data)=>{
        console.log(data.data);
        for (let index = 0; index < data.data.length; index++) {
          this.WishListProductsIds.push(data.data[index]._id)
          
        }
        this.setProductsIds(this.WishListProductsIds)
      }
    })
    // if(localStorage.getItem("token")){
    //   let token : string | null = localStorage.getItem("token")
    //   if(token != null){
    //     let data = jwtDecode(token)
    //     this.saveUserData(data)
        

    //   }
    // }
   }

   setProductsIds(array : string[]){
    this.WishListProducts.next(array)
   }


  getAllProductsInWishList() : Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`,{
      headers:this._CartService.headerData
    })
  }
  addProductToMyWishList(id:string) : Observable<any>{
    let body : any = {
      productId: id
    }
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,body,{
      headers:this._CartService.headerData
    })
  }
  removeFromWishList(id:string): Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${id}`,{
      headers:this._CartService.headerData
    })
  }

}
