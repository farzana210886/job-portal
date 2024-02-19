import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-form',
  template: `...`, 
})
export class JobFormComponent {
  @Output() addJob = new EventEmitter<any>();
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      // Add other form fields as needed
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const newJob = this.jobForm.value;
      this.jobService.addJob(newJob).subscribe((addedJob) => {
        this.addJob.emit(addedJob);
        this.jobForm.reset();
      });
    }
  }
}