import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor( private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(`${environment.api.url}/movies`);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.api.url}/movie/${id}`);
  }
}
