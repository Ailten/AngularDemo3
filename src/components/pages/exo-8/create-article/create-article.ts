import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  imports: [FormsModule],
  templateUrl: './create-article.html',
  styleUrl: './create-article.css',
})
export class CreateArticle {

  nameArticle = signal<string>('');
  priceArticle = signal<number>(0);
  quantityArticle = signal<number>(1);


  sendArticle = output<ArticleQuantity>();

  // when click on button create.
  createArticle(){

    // build a new article (based on signal / input html).
    let article: ArticleQuantity = {
      name: this.nameArticle(),
      price: this.priceArticle(),
      quantity: this.quantityArticle(),
    };

    // reset signal (for input html).
    this.nameArticle.set('');
    this.priceArticle.set(0);
    this.quantityArticle.set(1);

    console.log(article);

    // send back to the parent component.
    this.sendArticle.emit(article);

  }

}
