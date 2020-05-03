import { Component, OnInit } from '@angular/core';
import { INews } from '../shared/interfaces/news';
import { NewsService } from '../core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: INews[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.getAllNews();
  }
}
