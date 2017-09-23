import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.component.html',
  styleUrls: ['./inventory-managment.component.css']
})
export class InventoryManagmentComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        sku: 'MYSHOES',
        name: 'Blank Running Shoes',
        imageURL: '/assets/images/products/black-shoes.jpg',
        department: ['Men', 'Shoes', 'Running shoes'],
        price: 109.99
      },
      {
        sku: 'NEATOJACKET',
        name: 'Blue Jacket',
        imageURL: '/assets/images/products/blue-jacket.jpg',
        department: ['Women', 'Apperal', 'Jackets & Vests'],
        price: 238.99
      },
      {
        sku: 'NICEHAT',
        name: 'A Nice Black Hat',
        imageURL: '/assets/images/products/black-hat.jpg',
        department: ['Men', 'Accessories', 'Hats'],
        price: 29.99
      }
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product Clicked: ', product);
  }

}
