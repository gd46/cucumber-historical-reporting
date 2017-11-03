import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  getJobs() {
  	return this.http.get('/api/jobs')
  		.toPromise()
  		.then((response) => {
  			return response.json().data;
  		});
  }
}
