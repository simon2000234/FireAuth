import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {Change, EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Product} from '../models/product';

export class ProductControllerFirebase implements ProductController{
  constructor(private productService: ProductService) {}

  createNewStock(snap: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
    return this.productService.createNewStock(snap.after.data() as Product)
  }



}
