import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ArticleListComponent } from './components/article-list-component/article-list-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
