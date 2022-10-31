import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserProviders } from './user.providers';
import { JwtStrategy } from 'src/core/auth/strategy/JWT-strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders, JwtStrategy],
  // exports: [...UserProviders],
})
export class UserModule {}
