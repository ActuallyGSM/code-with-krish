import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const corsOptions: CorsOptions = {
  //   origin: 'http://localhost:3000', // Replace with the port you want to allow
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // };

  app.enableCors();

  await app.listen(3001);
}
bootstrap();
