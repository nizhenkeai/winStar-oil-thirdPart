import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOilComponent } from './send-oil.component';

describe('SendOilComponent', () => {
  let component: SendOilComponent;
  let fixture: ComponentFixture<SendOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
