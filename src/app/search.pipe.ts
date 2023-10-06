import { Pipe, PipeTransform } from '@angular/core';
import { product } from './interface/products';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform( products:product[], searchValue : string) : product[] {
    return products.filter((product)=>product.title.toLowerCase().includes(searchValue.toLowerCase()))
  }
}
