import {Product} from './product';

export interface Order {
  count: number;
  id?: string;
  product?: Product;
}
