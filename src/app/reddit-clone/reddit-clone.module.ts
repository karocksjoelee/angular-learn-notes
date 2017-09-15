import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RedditCloneComponent } from './reddit-clone.component';
import { ArticleComponent } from './article/article.component';

const routes = [
  { path: '', component: RedditCloneComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RedditCloneComponent,
    ArticleComponent
  ]
})
export class RedditCloneModule { }
