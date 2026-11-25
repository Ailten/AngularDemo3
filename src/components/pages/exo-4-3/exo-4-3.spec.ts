import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo43 } from './exo-4-3';

describe('Exo43', () => {
  let component: Exo43;
  let fixture: ComponentFixture<Exo43>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo43],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo43);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
