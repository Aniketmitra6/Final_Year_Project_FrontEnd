import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddonsComponent } from './useraddons.component';

describe('UseraddonsComponent', () => {
  let component: UseraddonsComponent;
  let fixture: ComponentFixture<UseraddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
