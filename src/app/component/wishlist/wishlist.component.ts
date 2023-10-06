import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wishlist, wishlistProducts } from 'src/app/interface/wishlist';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
declare let Swal: any;
declare let $: any;
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService
  ) {}
  products: wishlistProducts[] = [];

  ngOnInit(): void {
    this.getAllproducts();
  }

  addProductToCart(id: string) {
    $('#my-loading').fadeIn(10)

    this._CartService.addToCart(id).subscribe({
      next: (data) => {
        // this._CartService.countCart = data.numOfCartItems
        this._CartService.changeCartCount(data.numOfCartItems);
        console.log(data);
        $('#my-loading').fadeOut("slow")

        Swal.fire('Good job!', data.message, 'success');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getAllproducts() {
    $('#my-loading').fadeIn(10)

    this._WishlistService.getAllProductsInWishList().subscribe({
      next: (data: Wishlist) => {
        console.log(data);

        this.products = data.data;
        $('#my-loading').fadeOut(1000)

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromWishList(id: string) {

    this._WishlistService.removeFromWishList(id).subscribe({
      next: (data) => {
        this._WishlistService.setProductsIds(data.data);
        this.getAllproducts();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `product removed successfully`,
        })

      },
      error: (err) => {},
      complete : ()=>{

      }
    });

  }
}
