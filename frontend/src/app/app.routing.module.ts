import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: MoviesListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                onSameUrlNavigation: 'reload',
                enableTracing: true,
                useHash: true
            }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
