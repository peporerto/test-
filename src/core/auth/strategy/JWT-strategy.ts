import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/models/users/schema/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject('USER_MODEL') private readonly userepostiroy: Model<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:  'secret'  // process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string }) {
    const user = await this.userepostiroy.findById(payload.id);
    return user;
  }

  async validatepo(id: string) {
    const user = await this.userepostiroy.findById(id);
    return user;
  }
}
