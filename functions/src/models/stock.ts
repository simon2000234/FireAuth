import {Product} from './product';

export interface Stock {
  id?: string,
  stock: number,
  product: Product
}
