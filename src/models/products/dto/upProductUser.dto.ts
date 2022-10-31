import { IsString } from 'class-validator';

export class UpdatePUserDto {

  
  @IsString()
  name: string;

  @IsString()
  price: number;


}
