import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-admin',
  template: `...`, // Include the HTML template here
})
export class AdminComponent implements OnInit {
  jobs: any[];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  onAddJob(addedJob: any) {
    this.jobs.push(addedJob);
  }
}