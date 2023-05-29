import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-filter-drawer',
  templateUrl: './filter-drawer.component.html',
  styleUrls: ['./filter-drawer.component.scss']
})
export class FilterDrawerComponent {
 @Input() drawerOpen = false;
}
