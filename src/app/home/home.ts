import { Component } from '@angular/core';
import { PRODUCTS, Product } from './products';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  products: Product[] = PRODUCTS;

  addToCart(product: Product) {
    console.log('تمت إضافة المنتج:', product.name);
  }
}
