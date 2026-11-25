import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-print-article',
  imports: [CurrencyPipe],
  templateUrl: './print-article.html',
  styleUrl: './print-article.css',
})
export class PrintArticle {

  article = input.required<Article>();
  
  supres = output<Article>();

}
