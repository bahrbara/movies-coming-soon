import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie.model';


@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {

  @Input('data') data: Movie;

  isLoadingResults = true;

  constructor() { }

  ngOnInit(): void {
    this.isLoadingResults = false;
  }
}
