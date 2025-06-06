import { Component, inject } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list-component/article-list-component.component';
import { Router } from '@angular/router';
import { ArticlePageComponent } from '../article-page/article-page.component';

@Component({
  selector: 'app-home-page',
  imports: [ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  router: Router = inject(Router);

  goToContact() {
    this.router.navigate(['/article/:id', ArticlePageComponent]);
  }
}

