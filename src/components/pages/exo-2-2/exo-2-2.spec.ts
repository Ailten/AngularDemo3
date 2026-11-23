import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo22 } from './exo-2-2';

describe('Exo22', () => {
  let component: Exo22;
  let fixture: ComponentFixture<Exo22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo22],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
