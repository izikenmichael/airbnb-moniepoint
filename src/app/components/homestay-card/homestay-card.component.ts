import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mp-homestay-card',
  templateUrl: './homestay-card.component.html',
  styleUrls: ['./homestay-card.component.scss']
})
export class HomestayCardComponent {
  @Output() openDetailsDrawer = new EventEmitter();


  onClick() {
    this.openDetailsDrawer.emit();
  }

}
