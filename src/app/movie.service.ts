import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  friends:string[]=['ahmed','mohzmec'];

  constructor(private _httpclient:HttpClient) { }

  getMovies() :Observable<any>{
    return this._httpclient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5a82f2c4ee37381a8e35882eaaecb295');
  }
}
