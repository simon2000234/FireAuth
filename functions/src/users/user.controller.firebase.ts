import {UserController} from './user.controller';
import {EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {UserService} from './user.service';
import {UserRecord} from 'firebase-functions/lib/providers/auth';

export class UserControllerFirebase implements UserController{
  constructor(private userService: UserService) {}

  deleteUserAuth(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    return this.userService.deleteAuthUser(context.params.id);
  }

  createUser1stLogin(user: UserRecord): Promise<void> {
    return this.userService.createUser1stLogin(user);
  }

}
