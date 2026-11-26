import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleForm } from './create-article-form';

describe('CreateArticleForm', () => {
  let component: CreateArticleForm;
  let fixture: ComponentFixture<CreateArticleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateArticleForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateArticleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
