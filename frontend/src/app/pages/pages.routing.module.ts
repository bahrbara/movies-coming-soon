import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from '../movies/movies-list/movies-list.component';
import { MovieDetailComponent } from '../movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const pagesRoutes: Routes = [
    { path: '', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
