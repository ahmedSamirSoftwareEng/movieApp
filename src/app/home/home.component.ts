import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movieArr:Movie[]=[];
  term:string='fesf';
  
  constructor(public _movieService:MovieService){
    this._movieService.getMovies().subscribe({
      next:(data:any)=>{
        this.movieArr=data.results;
        console.log(this.movieArr);

      }
    })
  }

}
