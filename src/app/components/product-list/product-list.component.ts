import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Iproduct[];

  constructor(
    private productSerive: ProductService,
    private cartService: CartService,
  ) {
    this.products = productSerive.getProducts();
  }

  addToCart(product: Iproduct) {
    this.cartService.addToCart(product);
    window.alert('Item added to cart!');
  }
}
