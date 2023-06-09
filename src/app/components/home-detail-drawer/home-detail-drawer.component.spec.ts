import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailDrawerComponent } from './home-detail-drawer.component';

describe('HomeDetailDrawerComponent', () => {
  let component: HomeDetailDrawerComponent;
  let fixture: ComponentFixture<HomeDetailDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDetailDrawerComponent]
    });
    fixture = TestBed.createComponent(HomeDetailDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
