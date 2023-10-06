import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/service/cart.service';
declare let $: any
declare let Swal : any
 @Component({
  selector: 'app-productdeatails',
  templateUrl: './productdeatails.component.html',
  styleUrls: ['./productdeatails.component.css']
})
export class ProductdeatailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  ngAfterViewInit(): void {
    $("#my-loading").fadeOut("slow")

    
  }

  id : string = ""
  product:product | null = null;
  constructor(private _ActivatedRoute : ActivatedRoute , private ProductService:ProductsService , private _CartService : CartService){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      console.log(data.id)
      this.id =  data.id;
    })
  }
  ngOnInit(): void {
    $('#my-loading').fadeIn(10)

   this.ProductService.getProduct(this.id).subscribe({
    next: (data)=>{
      this.product = data.data
      console.log(this.product);
      $('#my-loading').fadeOut("slow")

    },
    error: (err)=>{
      console.log(err);
      
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



  
}
