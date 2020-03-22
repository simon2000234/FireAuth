import {UserRepository} from './user.repository';
import {UserRecord} from 'firebase-functions/lib/providers/auth';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  deleteAuthUser(uid: string): Promise<void> {
    return this.userRepository.deleteUserAuth(uid);
  }

  createUser1stLogin(user: UserRecord): Promise<void> {
    return this.userRepository.createUser1stLogin({
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      bio: 'New User Bio',
      role: 'Noob'
    });
  }

}
