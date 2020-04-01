import {Stock} from '../models/stock';
import {ProductRepository} from './product.repository';
import {Product} from '../models/product';

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  createNewStock(product: Product, stockId: string): Promise<any> {
    const stock: Stock = {
      id: stockId,
      product: product,
      stock: 5
    };
    return this.productRepository.createNewStock(stock);
  }
}
