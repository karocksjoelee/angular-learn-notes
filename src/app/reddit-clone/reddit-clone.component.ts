import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article';

@Component({
  selector: 'app-reddit-clone',
  templateUrl: './reddit-clone.component.html',
  styleUrls: ['./reddit-clone.component.css']
})
export class RedditCloneComponent implements OnInit {

  articles: Article[];

  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        title: 'Angular2',
        link: 'http//:angular.io',
        votes: 10
      },
      {
        title: 'Full Stacks',
        link: 'http//:fullstack.io',
        votes: 5
      },
      {
        title: 'Meteor',
        link: 'http//:meteor.io',
        votes: 7
      }
    ];

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {

    this.articles.push({
      title: title.value,
      link: link.value,
      votes: 0
    });

    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => {
      return b.votes - a.votes;
    });
  }

}
