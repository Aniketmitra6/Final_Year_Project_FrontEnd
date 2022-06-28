import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermonthlyComponent } from './usermonthly.component';

describe('UsermonthlyComponent', () => {
  let component: UsermonthlyComponent;
  let fixture: ComponentFixture<UsermonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
