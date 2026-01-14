import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigOverview } from './gig-overview';

describe('GigOverview', () => {
  let component: GigOverview;
  let fixture: ComponentFixture<GigOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
