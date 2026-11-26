import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamblingInput } from './gambling-input';

describe('GamblingInput', () => {
  let component: GamblingInput;
  let fixture: ComponentFixture<GamblingInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamblingInput],
    }).compileComponents();

    fixture = TestBed.createComponent(GamblingInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
