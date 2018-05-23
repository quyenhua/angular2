import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { appRoutes } from './app.routes';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpModule } from '@angular/http';
import { EmployeeService } from './services/employee.service';

@NgModule({
    declarations: [
        AppComponent, EmployeeInfoComponent, EmployeeListComponent
    ],
    imports: [
        BrowserModule, FormsModule, appRoutes, HttpModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
