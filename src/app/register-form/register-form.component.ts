import { Component } from '@angular/core';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    cities = [{
        id: 1,
        name: "Hồ Chí Minh"
    }, {
        id: 1,
        name: "Đà Nẵng"
    }, {
        id: 1,
        name: "Tân An"
    }, {
        id: 1,
        name: "Đà Lạt"
    }]
    onSubmit(value: any) {
        console.log(value);
    }
}
