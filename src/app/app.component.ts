import { Component, ViewChild, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { JobContentsService } from './services/job-contents.service';
import { JobTitleService } from './services/job-title.service';

@Component({
    selector: 'app-root',
    providers: [JobContentsService, JobTitleService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public jobsContents: any[];
    public jobs: any[];
    constructor (private jobContentsService: JobContentsService, private jobsService: JobTitleService) {

    }
    ngOnInit() {
        this.jobContentsService.getList().subscribe((res:any) => {
            this.jobsContents = res;
        });
        this.jobs = this.jobsService.getList();

        let done = 0, notDone = 0, notCompletedDone = 0;
        this.jobsContents.forEach((jobContents) => {
            if (jobContents.state === 'done') done++;
            else if (jobContents.state === 'new') notDone++;
            else notCompletedDone++;
        });
        this.jobs[0].account = this.jobsContents.length;
        this.jobs[1].account = notCompletedDone;
        this.jobs[2].account = done;
        this.jobs[3].account = notDone;
    }

    performer = "";
    public contents = this.jobsContents;

    parentResult(result: string) {
        this.performer = this.change_alias(result.toLowerCase());
        // debugger;
        if (!result || result === "") return this.contents = this.jobsContents;
        this.contents = this.jobsContents.filter((jobContents) => {
            return this.change_alias(jobContents.performer.toLowerCase()).indexOf(this.performer) > -1;
        });
        return this.contents;
    }

    parentId(id) {
        if (id === 1) {
            this.contents = this.jobsContents;
        } else {
            this.contents = this.jobsContents.filter((jobContents) => {
                return jobContents.state === (id === 2 ? 'wait' : (id === 3 ? 'done' : 'new'));
            });
        }
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
}
