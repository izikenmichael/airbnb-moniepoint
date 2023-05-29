import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsItemComponent } from './options-item.component';

describe('OptionsItemComponent', () => {
  let component: OptionsItemComponent;
  let fixture: ComponentFixture<OptionsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsItemComponent]
    });
    fixture = TestBed.createComponent(OptionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
