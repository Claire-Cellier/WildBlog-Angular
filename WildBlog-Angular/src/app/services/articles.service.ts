import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      createdAt: new Date('2023-05-01'),
      image: 'https://placehold.co/150x150',
      likeCount: 233,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      content: 'Développer une API REST nécessite de bonnes pratiques...',
      createdAt: new Date('2023-04-15'),
      image: 'https://placehold.co/150x150',
      likeCount: 99,
      isPublished: true,
      categoryName: 'API',
      isLiked: false,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      content: 'TypeScript apporte de la robustesse au code JavaScript...',
      createdAt: new Date('2023-03-12'),
      image: 'https://placehold.co/150x150',
      likeCount: 95,
      isPublished: true,
      categoryName: 'JavaScript',
      isLiked: false,
    },
    {
      id: 4,
      title: 'Les bases de Spring Boot',
      content: 'Spring Boot simplifie le développement Java...',
      createdAt: new Date('2023-02-20'),
      image: 'https://placehold.co/150x150',
      likeCount: 80,
      isPublished: true,
      categoryName: 'Spring',
      isLiked: false,
    },
    {
      id: 5,
      title: 'Introduction à RxJS',
      content: 'RxJS facilite la gestion des données asynchrones...',
      createdAt: new Date('2023-01-15'),
      image: 'https://placehold.co/150x150',
      likeCount: 65,
      isPublished: false,
      categoryName: 'JavaScript',
      isLiked: false,
    },
    {
      id: 6,
      title: 'Node.js pour les débutants',
      content: 'Node.js permet d\'utiliser JavaScript côté serveur...',
      createdAt: new Date('2023-01-01'),
      image: 'https://placehold.co/150x150',
      likeCount: 150,
      isPublished: true,
      categoryName: 'JavaScript',
      isLiked: false,
    },
    {
      id: 7,
      title: 'Guide de démarrage avec MongoDB',
      content: 'MongoDB est une base de données NoSQL...',
      createdAt: new Date('2023-03-05'),
      image: 'https://placehold.co/150x150',
      likeCount: 45,
      isPublished: false,
      categoryName: 'Base de données',
      isLiked: false,
    },
    {
      id: 8,
      title: 'Les nouveautés d\'Angular 15',
      content: 'Découvrez ce qui a changé dans Angular 15...',
      createdAt: new Date('2022-12-01'),
      image: 'https://placehold.co/150x150',
      likeCount: 220,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false,
    },
    {
      id: 9,
      title: 'Comprendre le routing en Angular',
      content: 'Le routing permet de naviguer entre différentes pages...',
      createdAt: new Date('2022-11-11'),
      image: 'https://placehold.co/150x150',
      likeCount: 90,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false,
    },
    {
      id: 10,
      title: 'GraphQL vs REST: Lequel choisir ?',
      content: 'GraphQL et REST sont deux approches pour les APIs...',
      createdAt: new Date('2022-10-15'),
      image: 'https://placehold.co/150x150',
      likeCount: 75,
      isPublished: false,
      categoryName: 'API',
      isLiked: false,
    },
    {
      id: 11,
      title: 'Créer une Single Page Application avec Angular',
      content: 'Angular facilite la création de SPAs modernes...',
      createdAt: new Date('2022-09-20'),
      image: 'https://placehold.co/150x150',
      likeCount: 92,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false,
    },
    {
      id: 12,
      title: 'Utiliser les services dans Angular',
      content: 'Les services permettent de partager des données...',
      createdAt: new Date('2022-08-12'),
      image: 'https://placehold.co/150x150',
      likeCount: 50,
      isPublished: true,
      categoryName: 'Angular',
      isLiked: false,
    },
    {
      id: 13,
      title: 'Les avantages des Web Components',
      content: 'Les Web Components permettent de créer des éléments...',
      createdAt: new Date('2022-07-10'),
      image: 'https://placehold.co/150x150',
      likeCount: 85,
      isPublished: false,
      categoryName: 'Web',
      isLiked: false,
    },
    {
      id: 14,
      title: 'Améliorer les performances de son API',
      content: 'Optimiser une API est essentiel pour une bonne UX...',
      createdAt: new Date('2022-06-20'),
      image: 'https://placehold.co/150x150',
      likeCount: 130,
      isPublished: true,
      categoryName: 'API',
      isLiked: false,
    },
    {
      id: 15,
      title: 'Les hooks dans React',
      content: 'Les hooks offrent une nouvelle façon de gérer l\'état...',
      createdAt: new Date('2022-05-05'),
      image: 'https://placehold.co/150x150',
      likeCount: 78,
      isPublished: true,
      categoryName: 'React',
      isLiked: false,
    },
    {
      id: 16,
      title: 'Introduction aux Progressive Web Apps (PWA)',
      content: 'Les PWAs combinent les avantages des apps et des sites...',
      createdAt: new Date('2022-04-01'),
      image: 'https://placehold.co/150x150',
      likeCount: 60,
      isPublished: true,
      categoryName: 'Web',
      isLiked: false,
    }
  ];

  constructor() { }

  getAll(): Article[] {
    return this.articles;
  }

  getPublished(): Article[] {
    return this.articles.filter(article => article.isPublished);
  }

  getById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  toggleLike(id: number): void {
    const article = this.getById(id);
    if (article) {
      article.isLiked = !article.isLiked;
      article.likeCount += article.isLiked ? 1 : -1;
    }
  }
}
