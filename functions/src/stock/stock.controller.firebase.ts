import {StockController} from './stock.controller';
import {StockService} from './stock.service';
import {Product} from '../models/product';


export class StockControllerFirebase implements StockController{
  constructor(private service: StockService) {
  }
  async countDownStock(product: Product, amount: number): Promise<any> {
    return await this.service.countDownStock(product, amount);
  }

  async updateStockProduct(product: Product): Promise<any> {
    return await this.service.updateStockProduct(product);
  }
}
