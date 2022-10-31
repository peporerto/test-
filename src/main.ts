import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('test')
    .setDescription('test')
    .setVersion('1.0')
    .addTag('users')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  console.log('runnig on port', port);
 
  await app.listen(port);
}
bootstrap();
