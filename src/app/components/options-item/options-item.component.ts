import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-options-item',
  templateUrl: './options-item.component.html',
  styleUrls: ['./options-item.component.scss']
})
export class OptionsItemComponent {
 @Input() title = '';
}
