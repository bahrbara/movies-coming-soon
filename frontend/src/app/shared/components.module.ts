import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
})
export class ComponentModule {}
