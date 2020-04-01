import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';

export interface ProductController {
  createNewStock(snap: DocumentSnapshot, context: EventContext, stockId: string): Promise<any>;
}
