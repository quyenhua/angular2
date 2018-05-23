import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-root',
    providers: [],
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees: any[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getList().subscribe((res: any) => {
            this._getDate(res);
        });
    }
    
    delete(id:number) {
        this.employeeService.delete(id).subscribe((res: any) => {
            if (res.status === 1) {
                alert(res.message);
            } else {
                this.employeeService.getList().subscribe((res: any) => {
                    this._getDate(res);
                });
            }
        });
    }

    _getDate(empList) {
        empList.forEach(emp => {
            if (emp.birthday) {
                var birthday = new Date(emp.birthday);
                emp.birthday = birthday.getDate() + '/' + (birthday.getMonth() + 1) + '/' + birthday.getFullYear();
            }
        });
        this.employees = empList;
    }
}