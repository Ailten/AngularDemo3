import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamblingPool } from './gambling-pool';

describe('GamblingPool', () => {
  let component: GamblingPool;
  let fixture: ComponentFixture<GamblingPool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamblingPool],
    }).compileComponents();

    fixture = TestBed.createComponent(GamblingPool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
