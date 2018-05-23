import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()

export class EmployeeService {
    private apiUrl = 'http://localhost:3000/employees/';

    constructor(private _http: Http) { }


    getList(): Observable<any[]> {
        return this._http.get(this.apiUrl).pipe(map((res) => res.json()));
    }

    get(id: number): Observable<any> {
        return this._http.get(this.apiUrl + id).pipe(map((res) => res.json()));
    }

    create(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).pipe(map((res) => res.json()));
    }

    update(data: any): Observable<any> {
        return this._http.put(this.apiUrl + data.id, data).pipe(map((res) => res.json()));
    }

    delete(id: number): Observable<any> {
        return this._http.delete(this.apiUrl + id).pipe(map((res) => res.json()));
    }
}