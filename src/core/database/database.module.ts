import { Module } from '@nestjs/common';
import config from 'src/config';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,

    }),
  ],
  providers: [...databaseProviders,],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
