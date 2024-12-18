import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { Article } from './article.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  smallCards: Article[] = [];
  bigCard: Article | undefined;

  constructor() { }

  ngOnInit(): void {
    var articles = dataFake.map(article => new Article({ ...article }));
    this.bigCard = articles.find(article => article.bigCard);
    this.smallCards = articles.filter(article => !article.bigCard);
  }

}
