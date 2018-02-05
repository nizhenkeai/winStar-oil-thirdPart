import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilAlreadyComponent } from './oil-already.component';

describe('OilAlreadyComponent', () => {
  let component: OilAlreadyComponent;
  let fixture: ComponentFixture<OilAlreadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilAlreadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilAlreadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
