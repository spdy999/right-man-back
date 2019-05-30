import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dbConnection } from './pg-connection';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  await dbConnection();

  await app.listen(PORT);
  Logger.log(`Server is running on PORT ${PORT}`);
}

bootstrap();
