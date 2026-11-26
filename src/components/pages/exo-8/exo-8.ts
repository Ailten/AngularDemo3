import { Component, inject } from '@angular/core';
import { CreateArticle } from './create-article/create-article';
import { ListArticle } from './list-article/list-article';
import { ArticleService } from '../../services/article-service';
import { CreateArticleForm } from './create-article-form/create-article-form';

@Component({
  selector: 'app-exo-8',
  imports: [CreateArticle, ListArticle, CreateArticleForm],
  templateUrl: './exo-8.html',
  styleUrl: './exo-8.css',
})
export class Exo8 {

  readonly articleService = inject(ArticleService);

  addArticle($event: ArticleQuantity){
    this.articleService.add($event);
  }

}
