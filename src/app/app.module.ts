import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { JobContentComponent } from './job-content/job-content.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
    declarations: [
        AppComponent, HorizontalMenuComponent, JobContentComponent,
        SearchContentComponent, RegisterFormComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
