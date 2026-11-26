import { Component, output, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-create-article-form',
  imports: [FormField],
  templateUrl: './create-article-form.html',
  styleUrl: './create-article-form.css',
})
export class CreateArticleForm {

  articleModel = signal<ArticleQuantity>({ 
    name: '', 
    price: 0,
    quantity: 1,
  });
  articleForm = form(this.articleModel, (model) => {  // constaint (on input form).
    required(model.name, { message: 'nom obligatoire !' });
    minLength(model.name, 3, { message: 'nom minimum 3 charactères !'});
  });

  sendArticle = output<ArticleQuantity>();

  // when click on button create.
  createArticle(){

    // build a new article (based on signal / input html).
    let article: ArticleQuantity = this.articleModel();

    console.log(article);

    // send back to the parent component.
    this.sendArticle.emit(article);

    // reset signal (for input html).
    this.articleModel.set({ 
      name: '', 
      price: 0,
      quantity: 1,
    });

  }

}
