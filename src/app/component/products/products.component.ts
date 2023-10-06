import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/interface/cart';
import { AllProducts, Pages, product } from 'src/app/interface/products';
import { SearchPipe } from 'src/app/search.pipe';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { WishlistService } from 'src/app/service/wishlist.service';

declare let $:any
declare let Swal:any
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  page :string = ""
  products:product[] = []
  searchValue  :string  = ""

  Pages : Pages | null = null
  prevPage:number = 0;
  constructor(private _ProductsService : ProductsService ,private _WishlistService : WishlistService, private _CartService : CartService){
  }

  getAllData(page : string = "1"){
    $('#my-loading').fadeIn(10)

  this._ProductsService.getAllProducts(this.page).subscribe({
    next:(data:AllProducts)=>{
      console.log(data)
      this.products = data.data
      this.Pages = data.metadata
      $('#my-loading').fadeOut("slow")

    },
    error:(err)=>{
      console.log(err);
      
    }
  })


}

  ngOnInit(): void {
    this.getAllData(this.page)
    
    $(".page-num").click((e : Event)=>{
      console.log();
      this.page = $(e.target).text()
      this.getAllData(this.page)
      $($(e.target).parent()).addClass("active")
      $($(e.target).parent()).siblings().removeClass("active")
     console.log();
      
    })
    

  }

  AddProductToMyWishList (id : string){
    $('#my-loading').fadeIn(100)

    this._WishlistService.addProductToMyWishList(id).subscribe({
      next :(data)=>{
        console.log(data);
        $(`#${id}`).css({color:"red"})
        this._WishlistService.setProductsIds(data.data);
        $('#my-loading').fadeOut(1000)
        Swal.fire(
          'Good job!',
          data.message,
          'success'
        )



        
      }
    })


    
  }
  addProductToCart(id : string){
    $('#my-loading').fadeIn(10)

    this._CartService.addToCart(id).subscribe({
      next : (data)=>{
        // this._CartService.countCart = data.numOfCartItems
        this._CartService.changeCartCount(data.numOfCartItems)
        console.log(data);
        $('#my-loading').fadeOut("slow")

        Swal.fire(
          'Good job!',
          data.message,
          'success'
        )
      },
      error : (err)=>{
        console.log(err);
        
      }
    })
  }


  ifInMyWishlist(id : string)  :boolean{
    
    for(let  i = 0 ; i  < this._WishlistService.WishListProducts.value.length ; i++){
      if(id == this._WishlistService.WishListProducts.value[i]){
        return true;
      }
    }
    return false
  }


}
