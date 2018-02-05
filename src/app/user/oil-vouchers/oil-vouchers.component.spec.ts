import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilVouchersComponent } from './oil-vouchers.component';

describe('OilVouchersComponent', () => {
  let component: OilVouchersComponent;
  let fixture: ComponentFixture<OilVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
