import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class ProductUserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  user: string;
}
