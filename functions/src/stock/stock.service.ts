import {Stock} from '../models/stock';
import {StockRepository} from './stock.repository';
import {Product} from '../models/product';

export class StockService {
  constructor(private repo: StockRepository) {
  }
  async countDownStock(product: Product, amount: number): Promise<any>{
    const stock: Stock = await this.repo.findStock(product);
    const newStock: Stock = {
      product: stock.product,
      stock: stock.stock - amount,
      id: stock.id
    };

    return this.repo.updateStock(newStock);
  }

  async updateStockProduct(product: Product): Promise<any> {
    const stock: Stock = await this.repo.findStock(product);
    const newStock: Stock = {
      product: product,
      stock: stock.stock,
      id: stock.id
    };

    return this.repo.updateStock(newStock);
  }
}
