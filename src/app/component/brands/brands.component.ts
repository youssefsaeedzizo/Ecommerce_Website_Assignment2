import { Component } from '@angular/core';
import { Brands, brand } from 'src/app/interface/brands';
import { BrandsService } from 'src/app/service/brands.service';
declare let $ : any
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  constructor(private _BrandsService : BrandsService){

  }
  page : string  = ""
  ngOnInit(): void {
    this.getAllBrands();

    $(".page-num").click((e : Event)=>{
      console.log();
      this.page = $(e.target).text()
      this.getAllBrands(this.page)
      $($(e.target).parent()).addClass("active")
      $($(e.target).parent()).siblings().removeClass("active")
     console.log();
      
    })
  }
  brands:brand[] = []
  getAllBrands(page: string = "1"){
    $('#my-loading').fadeIn(10)

    this._BrandsService.getBrands(page).subscribe({
      next:(data:Brands|any)=>{
        console.log(data);
        this.brands = data.data
        console.log(this.brands);
        $('#my-loading').fadeOut("slow")
    
      },
      error:(err)=>{

      }
    })
  }


}
