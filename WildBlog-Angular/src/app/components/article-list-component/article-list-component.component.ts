import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-list-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponent {

  articles: Article[] = [];

  constructor(private readonly articleService: ArticlesService) {
    this.articles = this.articleService.getAll();
  }

}
