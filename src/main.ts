import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { dbConnection } from './pg-connection';

async function bootstrap() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);
  dbConnection();

  const options = new DocumentBuilder()
    .setTitle('Right-Man API')
    .setDescription('The right-man API description')
    .setVersion('1.0')
    .addTag('right-man')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`Server is running on PORT ${PORT}`);
}
bootstrap();
