import {Stock} from '../models/stock';
import {Product} from '../models/product';

export interface StockRepository {
  countDownStock(stock: Stock): Promise<any>;

  findStock(product: Product): Promise<Stock>;
}
