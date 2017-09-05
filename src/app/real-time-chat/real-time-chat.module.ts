import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RealTimeChatComponent } from './real-time-chat.component';

const routes = [
  { path: '', component: RealTimeChatComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealTimeChatComponent]
})
export class RealTimeChatModule { }
