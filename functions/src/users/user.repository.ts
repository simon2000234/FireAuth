import {User} from '../models/user';

export interface UserRepository {
  deleteUserAuth(uid: string): Promise<any>;

  createUser1stLogin(user: User): Promise<any>;
}
