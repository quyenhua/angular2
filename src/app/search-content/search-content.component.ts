import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-content',
    templateUrl: './search-content.component.html',
    styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent {
    @Output() onResult = new EventEmitter<string>();

    onKey(event: any) {
        this.onResult.emit(event.target.value);
    }
}
