import {Product} from '../models/product';

export interface StockController {
  countDownStock(product: Product, amount: number): Promise<any>;
}
