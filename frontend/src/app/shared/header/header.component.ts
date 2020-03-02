import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent {
    @Output() datasetChange = new EventEmitter();

    form: FormGroup;

    constructor(
       private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            query: ['']
          });
        }

    searchMovies() {
        const query = this.form.get('query').value.normalize('NFKD').replace(/[^\w]/g, '');
        this.datasetChange.emit(query);
    }
}
