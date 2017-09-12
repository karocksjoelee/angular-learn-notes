import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RxChatComponent } from './rx-chat.component';

const routes = [
  { path: '', component: RxChatComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxChatComponent]
})
export class RxChatModule { }
