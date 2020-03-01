import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatPaginatorModule, MatProgressBarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ComponentModule } from '../shared/components.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MoviesRoutingModule,
    HttpClientModule,
    ComponentModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MoviesListComponent,
    MovieDetailComponent,
  ],
})
export class MoviesModule { }
