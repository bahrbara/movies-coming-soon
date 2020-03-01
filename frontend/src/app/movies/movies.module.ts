import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCardsComponent } from './movies-cards/movies-cards.component';
import { ComponentModule } from '../shared/components.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailComponent,
    MovieCardsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MoviesRoutingModule,
    HttpClientModule,
    ComponentModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MoviesListComponent,
    MovieDetailComponent,
    MovieCardsComponent
  ],
})
export class MoviesModule { }
