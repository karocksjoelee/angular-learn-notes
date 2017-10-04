import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryManagmentComponent } from './inventory-managment.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';

const routes = [
  { path: '', component: InventoryManagmentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InventoryManagmentComponent, ProductsListComponent, ProductsRowComponent]
})
export class InventoryManagementModule { }
