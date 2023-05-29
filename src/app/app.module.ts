import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IonicModule } from '@ionic/angular';
import { HomestayCardComponent } from './components/homestay-card/homestay-card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FilterDrawerComponent } from './components/filter-drawer/filter-drawer.component';
import { PlaceTypeComponent } from './components/place-type/place-type.component';
import { PlaceTypeItemComponent } from './components/place-type-item/place-type-item.component';
import { OptionsItemComponent } from './components/options-item/options-item.component';
import { HomeDetailDrawerComponent } from './components/home-detail-drawer/home-detail-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    HomestayCardComponent,
    SideNavComponent,
    FilterDrawerComponent,
    PlaceTypeComponent,
    PlaceTypeItemComponent,
    OptionsItemComponent,
    HomeDetailDrawerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
