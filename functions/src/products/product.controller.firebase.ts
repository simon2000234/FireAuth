import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Product} from '../models/product';

export class ProductControllerFirebase implements ProductController{
  constructor(private productService: ProductService) {}

  createNewStock(snap: DocumentSnapshot, context: EventContext, stockId: string): Promise<any> {
    return this.productService.createNewStock(snap.data() as Product, stockId)
  }



}
