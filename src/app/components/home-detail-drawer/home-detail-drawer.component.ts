import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mp-home-detail-drawer',
  templateUrl: './home-detail-drawer.component.html',
  styleUrls: ['./home-detail-drawer.component.scss']
})
export class HomeDetailDrawerComponent {
  @Input() drawerOpen!: boolean ;
  @Output() closeDrawer = new EventEmitter();


  onClick() {
    this.closeDrawer.emit();
  }

}
