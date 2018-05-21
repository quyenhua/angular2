import { Component, Input } from '@angular/core';

@Component({
    selector: 'job-content',
    templateUrl: './job-content.component.html',
    styleUrls: ['./job-content.component.css']
})
export class JobContentComponent {
    @Input() contents: Array<Object>;
}
