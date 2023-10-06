import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  countCart: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) {
    this.countCart.subscribe((data) => {
      

        this.getAllProductInMyCart().subscribe({
          next: (data) => {
            this.changeCartCount(data.numOfCartItems);
          },
          error: (err) => {
            console.log(err);
            console.log('errrorrr');
            
          },
        });
      
      
    });
  }

  changeCartCount(data: number) {
    this.countCart.next(data);
  }

  // ngOnInit(): void {

  //   this.countCart.subscribe((data)=>{
  //     this.changeCartCount(data)
  //   })
  // }
  baseUrl: string = 'https://ecommerce.routemisr.com';

  headerData: any = {
    token: localStorage.getItem('token'),
  };

  addToCart(id: string): Observable<any> {
    let body: any = {
      productId: id,
    };
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart?`, body, {
      headers: this.headerData,
    });
  }
  getAllProductInMyCart(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart?`, {
      headers: this.headerData,
    });
  }
  removeProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${productId}`, {
      headers: this.headerData,
    });
  }
  removeAllCart(): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`, {
      headers: this.headerData,
    });
  }

  updateQuantity(id: string, count: number): Observable<any> {
    let body: any = {
      count: count,
    };
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`, body, {
      headers: this.headerData,
    });
  }

  // get all product in cart

  // remove item from cart

  // clear all cart

  // update the quantity in the cart

  checkoutPaymentByVisa(id: string, data: any) {
    let body = {
      shippingAddress: data,
    };
    return this._HttpClient.post(
      `${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      body,
      {
        headers: this.headerData,
      }
    );
  }
}
