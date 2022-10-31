import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

import { RegisterUserDto } from './register.dto';
export class UserProducDto extends PartialType(RegisterUserDto) {
  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
}

export class ProductUserDto {}
