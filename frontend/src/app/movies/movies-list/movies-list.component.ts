import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { MoviesService } from '../movies.service';
import { MoviesDao } from '../movies.dao';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  pages: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getMovies(this.pages).subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });
  }
}
