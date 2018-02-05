import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUseComponent } from './pending-use.component';

describe('PendingUseComponent', () => {
  let component: PendingUseComponent;
  let fixture: ComponentFixture<PendingUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
