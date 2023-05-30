import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  drawerOpen: boolean = false;
  detailDrawerOpen: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  handleDrawerToggle(event: boolean) {
    event
      ? this.renderer.addClass(document.body, 'overflow-hidden')
      : this.renderer.removeClass(document.body, 'overflow-hidden');

    this.drawerOpen = event;
  }

  handleOpenDetailDrawer() {
    this.detailDrawerOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  handleCloseDetailDrawer() {
    this.detailDrawerOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
