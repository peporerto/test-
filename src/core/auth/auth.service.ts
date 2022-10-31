import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { LoginUserDto } from 'src/models/users/dto/login.dto';
import { User } from 'src/models/users/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    @Inject('USER_MODEL') private readonly userepostiroy: Model<User>,
  ) {}
  loginUser(loginUserDto: LoginUserDto) {
    const { password } = loginUserDto;
    return this.userepostiroy
      .findOne({
        email: loginUserDto.email,
      })
      .then((user) => {
        if (!user.email)
          throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

        return compare(password, user.password).then((isCheck) => {
          if (!isCheck)
            return new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);

          const payload = {
            id: user._id,
          };
          const datos = {
            firstName: user.firstName,
            lastName: user.lastName,
          };

          const token = this.jwtService.sign(payload);
          const data = {
            datos,
            token,
          };
          return data;
        });
      });
  }
}
