import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUseComponent } from './invalid-use.component';

describe('InvalidUseComponent', () => {
  let component: InvalidUseComponent;
  let fixture: ComponentFixture<InvalidUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
