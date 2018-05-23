import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'horizontal-menu',
    templateUrl: './horizontal-menu.component.html',
    styleUrls: ['./horizontal-menu.component.css'],
    providers: []
})

export class HorizontalMenuComponent {
    @Input() job: Object;
    @Output() onId = new EventEmitter<number>();

    viewAll(id: number) {
        this.onId.emit(id);
    }
}