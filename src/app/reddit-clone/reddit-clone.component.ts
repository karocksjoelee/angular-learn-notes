import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-clone',
  templateUrl: './reddit-clone.component.html',
  styleUrls: ['./reddit-clone.component.css']
})
export class RedditCloneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding title : ${title.value} / link: ${link.value}`);
    return false;
  }

}
