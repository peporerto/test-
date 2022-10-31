import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtStrategy } from 'src/core/auth/strategy/JWT-strategy';
import { User } from 'src/core/decorators/user-decorator';
import { RegisterUserDto } from './dto/register.dto';
import { UserService } from './user.service';
ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  createUser(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.createUser(registerUserDto);
  }

  @UseGuards(JwtStrategy)
  @Get('list')
  getprodutsbyid(@User() id: string) {
    return this.userService.getprodutsbyid(id);
  }

  // @Get('update/product')
  // getProductbyUser(@User() id: string, @Param('productId') productId: string) {
  //   return this.userService.getProductbyUser(id, productId);
  // }

  //   @Get()
  //   findAll() {
  //     return this.userService.findAll();
  //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.userService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //     return this.userService.update(+id, updateUserDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.userService.remove(+id);
  //   }
}
