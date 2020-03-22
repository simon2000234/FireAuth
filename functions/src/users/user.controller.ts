import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';
import {UserRecord} from 'firebase-functions/lib/providers/auth';

export interface UserController {
  deleteUserAuth(snap: DocumentSnapshot, context: EventContext): Promise<void>;

  createUser1stLogin(user: UserRecord): Promise<void>;
}
