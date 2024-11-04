import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientProxy } from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [ UserService],
})
export class UserModule {}
