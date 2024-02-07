import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public movie:MovieService){}
}
