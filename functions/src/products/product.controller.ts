import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Change, EventContext} from 'firebase-functions';

export interface ProductController {
  createNewStock(snap: Change<DocumentSnapshot>, context: EventContext): Promise<any>;
}
