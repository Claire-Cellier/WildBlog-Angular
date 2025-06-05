import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-list-component',
  imports: [ArticleListComponent, DatePipe],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponent {

  article: Article = {
    title: "Super article",
    content: "Blabla blabla blabla je vous parle d'un super sujet, ANGULAR ! C'est vraiment trop bien",
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished : false, 
    likeCount: 0, 
    categoryName: "Angular",
  };

}
