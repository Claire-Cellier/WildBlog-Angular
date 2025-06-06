import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  articleId!: number;
  article?: Article;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getById(this.articleId)

  }
}
