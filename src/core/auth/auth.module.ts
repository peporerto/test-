import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserProviders } from 'src/models/users/user.providers';
import { DatabaseModule } from '../database/database.module';
import { JwtStrategy } from './strategy/JWT-strategy';

@Module({
  imports: [  
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          signOptions: { expiresIn: '4d' },
          secret: 'secret' //process.env.JWT_SECRET,
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PassportModule, ...UserProviders],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
