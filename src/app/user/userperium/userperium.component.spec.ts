import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperiumComponent } from './userperium.component';

describe('UserperiumComponent', () => {
  let component: UserperiumComponent;
  let fixture: ComponentFixture<UserperiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserperiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserperiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
