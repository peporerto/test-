import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, isArray } from 'class-validator';
import { LoginUserDto } from './login.dto';
export class RegisterUserDto extends PartialType(LoginUserDto) {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
}