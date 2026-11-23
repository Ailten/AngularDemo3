import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo21 } from './exo-2-1';

describe('Exo21', () => {
  let component: Exo21;
  let fixture: ComponentFixture<Exo21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo21],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
