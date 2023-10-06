import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HTTPClient : HttpClient) { }
  baseUrl:string = "https://ecommerce.routemisr.com"

  getBrands(page:string) :Observable<any>{
    return this._HTTPClient.get(`${this.baseUrl}/api/v1/brands?page=${page}`)
  }

}
