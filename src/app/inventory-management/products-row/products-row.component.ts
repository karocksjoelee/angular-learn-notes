import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css']
})
export class ProductsRowComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
