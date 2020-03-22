import {UserRepository} from './user.repository';
import * as admin from 'firebase-admin';
import {User} from '../models/user';

export class UserRepositoryFirebase implements UserRepository {
  deleteUserAuth(uid: string): Promise<any> {
    return admin.auth().deleteUser(uid);
  }

  createUser1stLogin(user: User): Promise<any> {
    return admin.firestore().doc('users/' + user.uid).set(user);
  }
}
