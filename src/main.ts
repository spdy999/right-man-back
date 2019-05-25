import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { dbConnection } from './pg-connection';
// import { ApplicationModule } from './ApplicationModule';

async function bootstrap() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(ApplicationModule);

  await dbConnection();

  await app.listen(PORT);
  console.log(`Server is running on PORT ${PORT}`);
}
bootstrap();
