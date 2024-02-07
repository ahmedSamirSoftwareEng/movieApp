import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from '../movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() moviearr:Movie[]=[];
  
  
  customOptions: OwlOptions = {
    margin:10,
    loop: true,
    mouseDrag: true,
    touchDrag: true ,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
