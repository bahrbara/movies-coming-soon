import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent {
    @Output() datasetChange = new EventEmitter();

    form: FormGroup;

    constructor(
       private formBuilder: FormBuilder,
       private router: Router
    ) {
        this.form = this.formBuilder.group({
            query: ['']
          });
        }

    searchMovies() {
        this.datasetChange.emit(this.form.get('query').value.replace(/[^a-zA-Z ]/g, ""));
    }
}
