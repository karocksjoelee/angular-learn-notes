import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RealTimeService } from './realtime.service';
import { ContentComponent } from './content/content.component';

import { CoursesService } from './shared/services/course.service';

const routes = [
  { path: '', component: ContentComponent },
  { path: 'chat', loadChildren: 'app/real-time-chat/real-time-chat.module#RealTimeChatModule'},
  { path: 'rx-crud', loadChildren: 'app/rx-crud-service/rx-crud-service.module#RxCrudServiceModule' },
  { path: 'rx-chat', loadChildren: 'app/rx-chat/rx-chat.module#RxChatModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    RealTimeService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
