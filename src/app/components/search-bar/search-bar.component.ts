import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() drawerToggle = new EventEmitter<boolean>(false);

  isDrawerOpened = false;

  toggleOpenDrawer() {
    this.isDrawerOpened =!this.isDrawerOpened;
  }

  onFilterButtonClick() {
    this.toggleOpenDrawer();
    this.drawerToggle.emit(this.isDrawerOpened);
  }


}
