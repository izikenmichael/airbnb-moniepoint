import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTypeComponent } from './place-type.component';

describe('PlaceTypeComponent', () => {
  let component: PlaceTypeComponent;
  let fixture: ComponentFixture<PlaceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceTypeComponent]
    });
    fixture = TestBed.createComponent(PlaceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
