import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class JobContentsService {
    private apiUrl = "http://5b004607aa833c001436317b.mockapi.io/api/jobs-contents";

    constructor(private _http: Http) {

    }
    getList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((res: Response) => res.json());
    }
    // getList(): any[] {
        // let jobsContents = [{
        //     id: 1,
        //     jobName: "Đàm phán hợp đồng hợp tác chiến lượt với đối tác Nhật",
        //     performer: "Nguyễn Minh Trí",
        //     state: "done",
        //     priority: 2,
        //     duration: "3 hours",
        //     completedDate: "2-5-2018"
        // }, {
        //     id: 2,
        //     jobName: "Lập kế hoạch công việc hàng tuần",
        //     performer: "Nguyễn Minh Trí",
        //     state: "new",
        //     priority: 2,
        //     duration: "1 week",
        //     completedDate: "10-2-2018"
        // }, {
        //     id: 3,
        //     jobName: "Bàn kế hoạch hợp tác và nội dung hợp tác phát triển thị trường Châu Phi",
        //     performer: "Nguyễn Minh Trí",
        //     state: "wait",
        //     priority: 2,
        //     duration: "4 hours",
        //     completedDate: "4-2-2018"
        // }, {
        //     id: 4,
        //     jobName: "Chuẩn bị tài liêu, kế hoạch hợp tác với đối tác Nhật",
        //     performer: "Nguyễn Minh Trí",
        //     state: "wait",
        //     priority: 2,
        //     duration: "5 hour",
        //     completedDate: "6-2-2018"
        // }, {
        //     id: 5,
        //     jobName: "Gặp Lê Đức Hậu ăn trưa và bàn hợp tác 1 số dự án trên mobile",
        //     performer: "Nguyễn Minh Trí",
        //     state: "done",
        //     priority: 2,
        //     duration: "1.5 hours",
        //     completedDate: "5-5-2018"
        // }, {
        //     id: 6,
        //     jobName: "Tìm kiếm đối tác Nhật, Mỹ để mở rộng thị trường",
        //     performer: "Lương Nam Hoàng Minh",
        //     state: "new",
        //     priority: 2,
        //     duration: "5 days",
        //     completedDate: "6-15-2018"
        // }, {
        //     id: 7,
        //     jobName: "Gặp đối tác tư vấn tại Hà Nội",
        //     performer: "Lương Quang Hùng",
        //     state: "done",
        //     priority: 2,
        //     duration: "4 days",
        //     completedDate: "5-19-2018"
        // }, {
        //     id: 8,
        //     jobName: "Đi công tác gặp đối tác, khách hàng tại Hồ Chí Minh",
        //     performer: "Nguyễn Minh Trí",
        //     state: "done",
        //     priority: 2,
        //     duration: "2 days",
        //     completedDate: "5-2-2018"
        // }];
        // return jobsContents;
    // }
}