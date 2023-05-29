import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-place-type-item',
  templateUrl: './place-type-item.component.html',
  styleUrls: ['./place-type-item.component.scss']
})
export class PlaceTypeItemComponent {
  @Input() title = '';
  @Input() description = '';

}
