import { Component, OnInit } from '@angular/core';
import {Product} from '../services/product';
import {ProductService} from '../services/product.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductService,
              private os: OrderService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(products => this.products = products);
  }

  buy(product: Product): void {
    this.os.buyProduct(product, 1);
  }

}
