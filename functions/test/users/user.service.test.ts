import {UserRepository} from '../../src/users/user.repository';
import {UserService} from '../../src/users/user.service';
import {User} from '../../src/models/user';
import {IMock, Mock} from 'moq.ts';

describe('UserService', () => {
  let user: User = {uid: '1', role: 'noob', email: 'email@email.com', name: 'Brian', bio: 'le dank'};
  let userRepository: IMock<UserRepository>;
  let userService: UserService;
  beforeEach(() => {
    userRepository = new Mock<UserRepository>()
      .setup(ur => ur.createUser1stLogin(user))
      .returns(new Promise((resolve, reject) => {resolve}));
    userService = new UserService(userRepository.object())
  })

  it("Test test", async () => {
    expect(userService).toBeDefined;
  });
});

