import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyUseComponent } from './already-use.component';

describe('AlreadyUseComponent', () => {
  let component: AlreadyUseComponent;
  let fixture: ComponentFixture<AlreadyUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
