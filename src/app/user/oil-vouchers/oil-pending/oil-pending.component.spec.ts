import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilPendingComponent } from './oil-pending.component';

describe('OilPendingComponent', () => {
  let component: OilPendingComponent;
  let fixture: ComponentFixture<OilPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
