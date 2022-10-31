import { ProductModule } from './models/products/product.module';
import { AuthModule } from './core/auth/auth.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './models/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentSchema } from './core/auth/validator/validator';
import config from './config';
 

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      validationSchema: EnvironmentSchema,
      load: [config],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    DatabaseModule,
  ],

})
export class AppModule {}
