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
    public initialemployees: any[];

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

    onKey(event: any) {
        var name = this.change_alias(event.target.value.toLowerCase());
        // debugger;
        if (!name || name === "") return this.employees = this.initialemployees;
        this.employees = this.initialemployees.filter((employee) => {
            return this.isExisted(employee, name);
        });
    }

    isExisted(employee, name) {
        return (this.change_alias(employee.name.toLowerCase()).indexOf(name) > -1) ||
            (this.change_alias(employee.userName.toLowerCase()).indexOf(name) > -1) ||
            (employee.sex && this.change_alias(employee.sex.toLowerCase() || '').indexOf(name) > -1) ||
            (employee.country && this.change_alias(employee.country.toLowerCase() || '').indexOf(name) > -1) ||
            (employee.position && this.change_alias(employee.position.toLowerCase() || '').indexOf(name) > -1) ||
            (employee.department && this.change_alias(employee.department.toLowerCase() || '').indexOf(name) > -1);
    }

    change_alias(alias: string) {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        str = str.replace(/ + /g, " ");
        str = str.trim();
        return str;
    }

    _getDate(empList) {
        empList.forEach(emp => {
            if (emp.birthday) {
                var birthday = new Date(emp.birthday);
                emp.birthday = birthday.getDate() + '/' + (birthday.getMonth() + 1) + '/' + birthday.getFullYear();
            }
        });
        this.employees = empList;
        this.initialemployees = empList;
    }
}