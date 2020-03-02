import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() searchQuery: string;

  movies: any;
  page = 0;
  query: string;
  pageEvent: PageEvent;
  length: number;
  pageSize = 20;
  isSearch = false;
  loading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: MoviesService) { }

  ngOnInit() {
    if (!this.isSearch) {
      this.getMovies(this.page);
      this.getMoviesFromPageChange();
    }
  }

  getMoviesFromPageChange(event?:PageEvent):any {
    if (!this.isSearch) {
      this.getMovies(event.pageIndex);
    }
    this.getMoviesByQuerySearch(event.pageIndex, this.query);
  }

  getMovies(page) {
    this.service.getMovies(page).subscribe((data) => {
      this.movies = data.results;
      this.length = data.total_results;
      this.page = data.page;
    });
  }

  getMoviesByQuerySearch(page, query) {
    this.service.getMoviesBySearch(page, query).subscribe((movies) => {
      this.movies = movies.results;
      this.length = movies.total_results;
      this.page = movies.page;
    });
  }

  datasetChange(query) {
    this.isSearch = true;
    this.query = query;
    this.getMoviesByQuerySearch(0, this.query);
  }
}

