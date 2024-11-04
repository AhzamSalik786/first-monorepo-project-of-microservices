import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      id: 1,
      fname: 'ahzam',
      lname: 'salik',
      age: 27,
    },
    {
      id: 1,
      fname: 'ali',
      lname: 'ahmed',
      age: 29,
    },
  ];
  findAll() {
    return this.users;
  }
}
