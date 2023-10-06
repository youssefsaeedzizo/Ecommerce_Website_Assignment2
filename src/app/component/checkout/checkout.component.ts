import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
declare let $ : any

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  id:string = ""
  constructor(private _ActivatedRoute:ActivatedRoute,private _CartService : CartService){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.id = data.id
    })
  }

  paymentForm : FormGroup = new FormGroup({
    details  :  new FormControl(null , [Validators.required]),
    phone  :  new FormControl(null , [Validators.required]),
    city  :  new FormControl(null , [Validators.required])
  })

  ngAfterViewInit(): void {
    $("#my-loading").fadeOut("slow")

    
  }
  payByCard(){

    this._CartService.checkoutPaymentByVisa(this.id,this.paymentForm.value).subscribe({
      next:(response:any)=>{
        console.log(response);
        window.location.href = response.session.url
        
      }
    })
  }


}
