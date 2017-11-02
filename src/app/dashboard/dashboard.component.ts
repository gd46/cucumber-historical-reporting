import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	jobsTableInfo: any;

  constructor(private http: Http) { }

  ngOnInit() {
  	this.getJobs()
  		.then((data) => this.setJobsTableData(data));
  }

  getJobs() {
  	return this.http.get('/api/jobs')
  		.toPromise()
  		.then((response) => {
  			return response.json().data;
  		});
  }

  setJobsTableData(data) {
  	this.jobsTableInfo = {
  		title: 'Job History',
  		headers: [
  			'Build Name',
  			'Created On'
  		],
  		data: data
  	}
  };

}
