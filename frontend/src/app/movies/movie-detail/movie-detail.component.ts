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
    // this.service.getMovieById(id).subscribe((data) => {
    //   this.movie = data ? data : null;
    // });
    this.movie = {
      popularity: 116.483,
      vote_count: 478,
      poster_path: '/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg',
      id: 458897,
      backdrop_path: '/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg',
      original_language: 'en',
      original_title: "Charlie's Angels",
      genre_ids: [
          28,
          12,
          35
      ],
      title: "Charlie's Angels",
      vote_average: 6.4,
      overview: 'When a systems engineer blows the whistle on a dangerous technology, Charlie\'s Angels from across the globe are called into action, putting their lives on the line to protect society.',
      release_date: 2019-11-14
    }
  }
}
