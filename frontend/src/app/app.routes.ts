import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/new', component: EmployeeInfoComponent},
    {path: 'employees/:id/edit', component: EmployeeInfoComponent}
];

export const appRoutes = RouterModule.forRoot(routes);