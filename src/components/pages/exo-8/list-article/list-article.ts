import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-list-article',
  imports: [CurrencyPipe],
  templateUrl: './list-article.html',
  styleUrl: './list-article.css',
})
export class ListArticle {

  articleList = input.required<ArticleQuantity[]>();
  removeArticle = output<ArticleQuantity>();

  totalPrice = computed(() => {
    return this.articleList().reduce((acc, e) => acc + e.price * e.quantity, 0);
  });
  totalPriceUnit = computed(() => {
    return this.articleList().reduce((acc, e) => acc + e.price, 0);
  });

  deleteArticle($event: number){

    let articleToRemove = this.articleList()[$event];

    this.removeArticle.emit(articleToRemove);

  }

}
