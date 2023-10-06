import { Component } from '@angular/core';
import { Cart } from 'src/app/interface/cart';
import { product } from 'src/app/interface/products';
import { CartService } from 'src/app/service/cart.service';
declare let Swal : any
declare let $ : any
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private _CartService : CartService){
    $('#my-loading').fadeIn(10)

  }
  productData : Cart | null = null;
  productsCart : any[] = []
  ngOnInit(): void {
    

      this._CartService.getAllProductInMyCart().subscribe({
        next : (req : Cart)=>{
          this.productData = req
          this.productsCart = this.productData.data.products
          console.log(req);
          console.log("successss");
          $('#my-loading').fadeOut("slow")
  
        },
        error: (err)=>{
          console.log(err);
          this.productData = null
          console.log("errrorr");
          $('#my-loading').fadeOut("slow")

          
        }
      })
    
    
  }
  
  removeProduct(id:string){
    $('#my-loading').fadeIn(10)

    this._CartService.removeProduct(id).subscribe({
      next : (req)=>{
        this.productData = req
        this._CartService.changeCartCount(req.numOfCartItems)
        $('#my-loading').fadeOut("slow")
        console.log(req);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `product removed successfully`,
        })


        console.log(req);
      }
    })
  }
  removeAllCart(){
    $('#my-loading').fadeIn(10)

    this._CartService.removeAllCart().subscribe({
      next : (req)=>{
        this.productsCart = []
        this.productData = null
        this._CartService.changeCartCount(0)
        console.log(req);
        $('#my-loading').fadeOut("slow")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `All products removed successfully`,
        })

      }
    })
  }

  

  updateQuantity(id:string,count: number){
    $('#my-loading').fadeIn(10)

    if(count >= 0){
      this._CartService.updateQuantity(id,count).subscribe({
        next : (req)=>{
          this.productData = req
          console.log(req);
          $('#my-loading').fadeOut("slow")

        }
      })
    }
    else{

      Swal.fire({
        icon: 'error',
        title: 'Quantity',
        text: 'The Lowst quantity is 0',
      })
    }
  }  
    
}
