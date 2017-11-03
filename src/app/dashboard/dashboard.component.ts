import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [JobsService]
})
export class DashboardComponent implements OnInit {

	jobsTableInfo: any;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
  	this.jobsService.getJobs()
  		.then((data) => this.setJobsTableData(data))
  		.catch((err) => {
  			//TODO add logger
  			console.log('error getting jobs info', err);
  		});
  }

  setJobsTableData(data) {
  	this.jobsTableInfo = {
  		headers: [
  			'Build Name',
  			'Created On'
  		],
  		data: data
  	}
  };
}
