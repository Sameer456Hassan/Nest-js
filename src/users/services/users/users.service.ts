import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'user', email: 'user@email.com' },
    { username: 'cory', email: 'cory@email.com' },
    { username: 'reg', email: 'reg@email.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserDto) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return null
  }
}
