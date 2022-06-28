import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyplansComponent } from './monthlyplans.component';

describe('MonthlyplansComponent', () => {
  let component: MonthlyplansComponent;
  let fixture: ComponentFixture<MonthlyplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
