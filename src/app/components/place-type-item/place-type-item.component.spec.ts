import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTypeItemComponent } from './place-type-item.component';

describe('PlaceTypeItemComponent', () => {
  let component: PlaceTypeItemComponent;
  let fixture: ComponentFixture<PlaceTypeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceTypeItemComponent]
    });
    fixture = TestBed.createComponent(PlaceTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
