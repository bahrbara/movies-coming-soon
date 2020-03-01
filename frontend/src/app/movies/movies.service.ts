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

  getMovies(page: number): Observable<any> {
    const href = `${environment.api.url}/movies/${page + 1}`;
    return this.http.get<any>(href);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.api.url}/movie/${id}`);
  }

  getGenres(): Observable<any> {
    const href = `${environment.api.url}/genres`;
    return this.http.get<any>(href);
  }

  getMoviesBySearch(page: number, query: string): Observable<any> {
    const href = `${environment.api.url}/movies/search/${page + 1}/${query}`;
    return this.http.get<any>(href);
  }
}
