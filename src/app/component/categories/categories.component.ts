import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
declare let $ :any
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private _CategoryService : CategoryService){
    $('#my-loading').fadeIn(10)

  }
  subCategories :any[] = [];
  CategoriesData : any[] = []
  category : object|any = null
  categoryName :string = ""
  ngOnInit(): void {
   this._CategoryService.getAllCategories().subscribe({
    next:(data:any)=>{
      console.log(data.data);
      this.CategoriesData = data.data
      $('#my-loading').fadeOut("slow")

    }
   })


  }

  showSubCategories(id:string,CategoryName:string){
    $('#my-loading').fadeIn(10)

    this._CategoryService.getOneCategory(id).subscribe((data)=>{
      this.subCategories = data.data
      this.categoryName = CategoryName
      console.log(data);

      $("#category-info").fadeIn("slow")
      $('#my-loading').fadeOut("slow")

      
      
    })
  }

}
