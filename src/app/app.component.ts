import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  drawerOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  handleDrawerToggle(event: boolean) {
    event
      ? this.renderer.addClass(document.body, 'overflow-hidden')
      : this.renderer.removeClass(document.body, 'overflow-hidden');

    this.drawerOpen = event;
  }
}
