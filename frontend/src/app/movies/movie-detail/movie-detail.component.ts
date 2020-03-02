import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;
  genres: any;

  constructor(
    private route: ActivatedRoute,
    private service: MoviesService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id = params.id;
    this.getMovieById(this.id);
    });
  }

  getMovieById(id: number) {
    this.service.getMovieById(id).subscribe((data) => {
      this.movie = data ? data : null;
    });
  }
}
