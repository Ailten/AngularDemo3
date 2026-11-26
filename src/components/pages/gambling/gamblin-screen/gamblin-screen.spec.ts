import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamblinScreen } from './gamblin-screen';

describe('GamblinScreen', () => {
  let component: GamblinScreen;
  let fixture: ComponentFixture<GamblinScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamblinScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(GamblinScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
