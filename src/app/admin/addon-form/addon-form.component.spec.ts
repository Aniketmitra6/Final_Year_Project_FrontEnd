import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonFormComponent } from './addon-form.component';

describe('AddonFormComponent', () => {
  let component: AddonFormComponent;
  let fixture: ComponentFixture<AddonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
