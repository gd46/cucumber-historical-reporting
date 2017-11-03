import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

	@Input() tableData;

  constructor() { }

  ngOnInit() {
  	console.log('tableData', this.tableData);
  }

}
