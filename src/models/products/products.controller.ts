import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtStrategy } from 'src/core/auth/strategy/JWT-strategy';
import { User } from 'src/core/decorators/user-decorator';
import { ProductUserDto } from './dto/products.dto';
import { UpdatePUserDto } from './dto/upProductUser.dto';
import { ProductsService } from './products.service';
ApiTags('products'); 
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtStrategy)
  @Post('create')
  createproduct(@User() id: string, @Body() productUserDto: ProductUserDto) {
    return this.productsService.createproduct(id, productUserDto);
  }
  @UseGuards(JwtStrategy)
  @Get(':productId/product')
  getProduct(@Param('productId') id: string) {
    return this.productsService.getProduct(id);
  }

  @UseGuards(JwtStrategy)
  @Patch(':productId/update')
  update(
    @Param('productId') id: string,
    @Body() updatePUserDto: UpdatePUserDto,
  ) {
    return this.productsService.update(id, updatePUserDto);
  }

  @UseGuards(JwtStrategy)
  @Delete(':productId/delete')
  removeProduct(@User() id: string, @Param('productId') productId: string) {
    return this.productsService.removeProduct(id, productId);
  }
}
