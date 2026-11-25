import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrintArticle } from '../../print-article/print-article';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exo-5',
  imports: [FormsModule, PrintArticle, CurrencyPipe],
  templateUrl: './exo-5.html',
  styleUrl: './exo-5.css',
})
export class Exo5 implements OnInit {

  articleName = signal('');
  price = signal(0);

  articles = signal<Article[]>([]);

  articleIsEmpty = computed<boolean>(() => {
    return this.articles().length == 0
  });
  articleTotalPrice = computed<number>(() => {
    return this.articles()
      .map((artcile) => artcile.price)
      .reduce((a, b) => a + b);
  });

  ngOnInit(): void {

    // define a default list of articles when init.
    this.articles.update((articles) => [
      {name: 'Apple', price: 5.15},
      {name: 'Ananas', price: 12.10},
      {name: 'Banana', price: 3.05}
    ]);
  }

  addArticle(){

    if (this.price() < 0){
      console.error('prix invalid !');
      return;
    }
    
    let newArticle: Article = {
      name: this.articleName(),
      price: this.price()
    }

    this.articles.update((articles) => [...articles, newArticle]);

  }

  onSupres($event: Article){

    // edit articles, to remove the $event (article) send.
    this.articles.update((articles) => articles.filter((a) => a != $event));
  }

}
