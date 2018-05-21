import { Injectable } from '@angular/core';

@Injectable()

export class JobTitleService {
    getList(): any[] {
        let jobs = [{
            id: 1,
            name: "Công việc",
            account: 0
        }, {
            id: 2,
            name: "Công việc quá hạn",
            account: 0
        }, {
            id: 3,
            name: "Công việc đã hoàn thành",
            account: 0
        }, {
            id: 4,
            name: "Công việc chưa hoàn thành",
            account: 0
        }];
        return jobs;
    }
}