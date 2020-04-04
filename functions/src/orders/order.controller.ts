import {Product} from '../models/product';

export interface OrderController {
  updateOrderProduct(product: Product): Promise<any>
}
