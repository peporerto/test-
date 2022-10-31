import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register.dto';
import { User } from './schema/user.schema';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL') private readonly userepostiroy: Model<User>,
  ) {}
  createUser(registerUserDto: RegisterUserDto) {
    const { password } = registerUserDto;

    const resgister = hash(password, 10).then((passwordHash) => {
      registerUserDto = { ...registerUserDto, password: passwordHash };
      return this.userepostiroy.create(registerUserDto);
    });
    return resgister;
  }

  getprodutsbyid(id: string) {
    return this.userepostiroy
      .findById(id)
      .populate('products')
      .select('firstName')
      .select('lastName');
  }




}
