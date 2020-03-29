import {Stock} from '../models/stock';

export interface ProductRepository {
  createNewStock(stock: Stock): Promise<any>;
}
