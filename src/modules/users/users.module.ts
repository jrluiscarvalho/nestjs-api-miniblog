import { Module } from '@nestjs/common';
import { usersProviders } from './user.providers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
