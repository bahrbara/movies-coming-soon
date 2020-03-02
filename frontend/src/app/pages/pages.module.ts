import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentModule } from '../shared/components.module';

@NgModule({
  imports: [
      CommonModule,
      PagesRoutingModule,
      ComponentModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PagesModule { }
