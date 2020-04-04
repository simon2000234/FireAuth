import {Product} from '../models/product';
import {OrderRepository} from './order.repository';
import {Order} from '../models/order';

export class OrderService {
  constructor(private repo: OrderRepository) {
  }
  async updateOrderProduct(product: Product): Promise<any> {
    const order: Order = await this.repo.findOrder(product);
    const newOrder: Order = order;

    return this.repo.updateOrder(newOrder);
  }
}
