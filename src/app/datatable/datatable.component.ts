import { Component, OnInit, Input } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

	@Input() title;

  constructor() { }

  ngOnInit() {
  	$('#dataTable').DataTable();
  }

}
