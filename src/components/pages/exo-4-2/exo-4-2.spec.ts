import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo42 } from './exo-4-2';

describe('Exo42', () => {
  let component: Exo42;
  let fixture: ComponentFixture<Exo42>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo42],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo42);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
