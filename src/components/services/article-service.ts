import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  articles = signal<ArticleQuantity[]>([
    {
      name: 'Tomate',
      price: 0.3,
      quantity: 5
    },
    {
      name: 'Banane',
      price: 0.6,
      quantity: 1
    },
    {
      name: 'Prune',
      price: 0.45,
      quantity: 2
    },
  ]);

  add(article: ArticleQuantity){
    this.articles.update((v) => [...v, article]);
  }
  remove(article: ArticleQuantity){
    this.articles.update((v) => 
      v.filter((a) => a !== article)
    );
  }

}
