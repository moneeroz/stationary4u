import { Injectable } from '@angular/core';
import { products } from 'src/config/products';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor () { }

  getProducts (): Iproduct[] {
    return products
  }
}
