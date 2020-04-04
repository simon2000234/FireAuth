import {OrderService} from './order.service';
import {Product} from '../models/product';
import {OrderController} from './order.controller';

export class OrderControllerFirebase implements OrderController{
  constructor(private service: OrderService) {}

  async updateOrderProduct(product: Product): Promise<any> {
    return await this.service.updateOrderProduct(product);
  }
}
