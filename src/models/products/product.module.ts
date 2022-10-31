import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/core/auth/strategy/JWT-strategy';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserProviders } from '../users/user.providers';
import { ProductsController } from './products.controller';
import { ProductsProviders } from './products.providers';
import { ProductsService } from './products.service';

@Module({
  imports: [PassportModule, DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...UserProviders,
    JwtStrategy,
    ...ProductsProviders,
  ],
  exports: [ProductsService],
})
export class ProductModule {}
