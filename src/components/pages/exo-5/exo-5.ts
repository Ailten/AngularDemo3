import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrintArticle } from '../../print-article/print-article';

@Component({
  selector: 'app-exo-5',
  imports: [FormsModule, PrintArticle],
  templateUrl: './exo-5.html',
  styleUrl: './exo-5.css',
})
export class Exo5 {

  articleName = signal('');
  price = signal(0);

  articles = signal<Article[]>([]);

  addArticle(){
    
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
