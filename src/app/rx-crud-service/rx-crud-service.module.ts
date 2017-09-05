import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RxCrudServiceComponent } from './rx-crud-service.component';

const routes = [
  { path: '', component: RxCrudServiceComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxCrudServiceComponent]
})
export class RxCrudServiceModule { }
