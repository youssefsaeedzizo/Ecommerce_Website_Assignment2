import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient : HttpClient) { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`)
  }
  getOneCategory(id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${id}/subcategories`)
  }

}
