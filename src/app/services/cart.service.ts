import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './../../config/products';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Iproduct[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Iproduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items =[];
    return this.items
  }
}
