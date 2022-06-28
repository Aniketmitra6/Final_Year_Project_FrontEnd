import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumplansComponent } from './premiumplans.component';

describe('PremiumplansComponent', () => {
  let component: PremiumplansComponent;
  let fixture: ComponentFixture<PremiumplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
