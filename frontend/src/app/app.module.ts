import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { PagesModule } from './pages/pages.module';
import { ComponentModule } from './shared/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentModule,
    MoviesModule,
    MatFormFieldModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
