import * as admin from 'firebase-admin';
import {Stock} from '../models/stock';
import {ProductRepository} from './product.repository';
export class ProductRepositoryFirebase implements ProductRepository{
  createNewStock(stock: Stock): Promise<any> {
    return admin.firestore().doc("stock").create(stock)
  }
}
