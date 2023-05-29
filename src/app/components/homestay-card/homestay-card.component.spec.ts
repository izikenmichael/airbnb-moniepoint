import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayCardComponent } from './homestay-card.component';

describe('HomestayCardComponent', () => {
  let component: HomestayCardComponent;
  let fixture: ComponentFixture<HomestayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomestayCardComponent]
    });
    fixture = TestBed.createComponent(HomestayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
