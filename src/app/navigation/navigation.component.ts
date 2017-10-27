import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	@Input() isSideNavClosed: boolean;
	@Output() isSideNavClosedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
 	}

  toggleSideNav(newValue): void {
		this.isSideNavClosed = !this.isSideNavClosed;
		this.isSideNavClosedChange.emit(this.isSideNavClosed);
  }

}
