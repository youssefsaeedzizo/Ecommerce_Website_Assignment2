import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllProducts } from '../interface/products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient :HttpClient) { }
  getAllProducts(page : string ="1"):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}`)
  }
  getProduct(id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${id}`)
  }
}
