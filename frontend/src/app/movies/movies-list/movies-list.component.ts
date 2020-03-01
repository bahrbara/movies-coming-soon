import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  loading = true;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getMovies().subscribe((data) => {
      this.movies = data;
      this.loading = false;
    });
  }

}
