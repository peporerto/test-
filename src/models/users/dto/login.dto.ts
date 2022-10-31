import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {

  @IsString()
  @IsNotEmpty()
  password: any;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}