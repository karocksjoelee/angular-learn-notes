import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RealTimeService } from './realtime.service';
import { ContentComponent } from './content/content.component';

const routes = [
  { path: '', component: ContentComponent, children: [
    { path: 'rx-crud', loadChildren: 'app/rx-crud-service/rx-crud-service.module#RxCrudServiceModule' },
    { path: 'chat', loadChildren: 'app/real-time-chat/real-time-chat.module#RealTimeChatModule' }
  ]}
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
  providers: [RealTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
