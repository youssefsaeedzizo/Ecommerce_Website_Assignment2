import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {
  constructor(private _CategoryService :CategoryService){};
  Categories :any = [];
  customOptions: OwlOptions = {
    loop: true,
    
    autoplay:true,
    autoplayTimeout:5000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 8
      }
    },
  }
  ngOnInit(): void {
    this._CategoryService.getAllCategories().subscribe({
      next:(data)=>{
        console.log(data);
        this.Categories = data.data
      }
    })
  }
    



}
