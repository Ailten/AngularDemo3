import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gambling } from './gambling';

describe('Gambling', () => {
  let component: Gambling;
  let fixture: ComponentFixture<Gambling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gambling],
    }).compileComponents();

    fixture = TestBed.createComponent(Gambling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
