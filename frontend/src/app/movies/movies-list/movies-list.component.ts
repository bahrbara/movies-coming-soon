import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  page = 0;
  pageEvent: PageEvent;
  length: number;
  pageSize = 20;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.getMovies(this.page);
    this.getMoviesFromPageChange();
  }

  getMoviesFromPageChange(event?:PageEvent) {
    this.getMovies(event.pageIndex);
  }

  getMovies(page) {
    this.service.getMovies(page).subscribe((data) => {
      this.movies = data.results;
      this.length = data.total_results;
      this.page = data.page;
    });
  }

}

