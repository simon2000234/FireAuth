import {Product} from '../models/product';
import {Order} from '../models/order';

export interface OrderRepository {
  findOrder(product: Product): Promise<Order>

  updateOrder(order: Order): Promise<any>
}
