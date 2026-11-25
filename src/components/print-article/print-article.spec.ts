import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintArticle } from './print-article';

describe('PrintArticle', () => {
  let component: PrintArticle;
  let fixture: ComponentFixture<PrintArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
