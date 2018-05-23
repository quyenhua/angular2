import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
@Component({
    selector: 'employee-info',
    templateUrl: './employee-info.component.html',
    styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit, OnDestroy {

    public id: number;
    public subscription: any;
    public title: string;
    public pageMode: string;
    public employee = {};
    public saveTitle: string;
    public showError: boolean;
    public errorMessage: string;
    public countries = [
        'Indonesia',
        'Myanmar',
        'Thailand',
        'Vietnam',
        'Malaysia',
        'Philippines',
        'Laos',
        'Cambodia',
        'Timor Leste',
        'Bruney',
        'Singapore'
    ];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            if (!this.id) {
                this.title = "Add new employee";
                this.pageMode = "add";
            } else {
                this.title = "Edit employee's infomation";
                this.pageMode = "edit";
                this.employeeService.get(this.id).subscribe((res: any) => {
                    this.employee = res;
                });   
            }
            this.saveTitle = this.pageMode === "add" ? "Add" : "Edit";
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    GotoEmployees() {
        this.router.navigate(['employees']);
    }
    onSubmit(value: any) {
        if (this.pageMode === "add") {
            this.employeeService.create(value).subscribe((res: any) => {
                if (res.status === 2) {
                    this.showError = true;
                    this.errorMessage = "User name already existed";
                } else if (res.status === 1) {
                    this.showError = true;
                    this.errorMessage = "Employee's infomation isn't saved";
                } else {
                    this.router.navigate(['employees']);
                }
            });
        } else {
            value.id = this.id;
            this.employeeService.update(value).subscribe((res: any) => {
                if (res.status === 2) {
                    this.showError = true;
                    this.errorMessage = "User name already existed";
                } else if (res.status === 1) {
                    this.showError = true;
                    this.errorMessage = "Employee's infomation isn't saved";
                } else {
                    this.router.navigate(['employees']);
                }
            });
        }
    }

    cancel() {
        this.router.navigate(['employees']);
    }
}
