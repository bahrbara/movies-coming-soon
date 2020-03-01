import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

const appRoutes: Routes = [
    { path: '', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
