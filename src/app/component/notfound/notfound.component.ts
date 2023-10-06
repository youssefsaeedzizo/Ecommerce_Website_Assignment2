import { Component } from '@angular/core';
declare let $ : any
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  ngAfterViewInit(): void {
    $("#my-loading").fadeOut("slow")

    
  }
}
