import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryManagmentComponent } from './inventory-managment.component';

const routes = [
  { path: '', component: InventoryManagmentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InventoryManagmentComponent]
})
export class InventoryManagementModule { }
