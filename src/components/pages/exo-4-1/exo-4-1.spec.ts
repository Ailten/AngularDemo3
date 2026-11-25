import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo41 } from './exo-4-1';

describe('Exo41', () => {
  let component: Exo41;
  let fixture: ComponentFixture<Exo41>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo41],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo41);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
