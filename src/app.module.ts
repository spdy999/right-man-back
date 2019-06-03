import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { databaseProviders } from './db/database.providers';
import { IdeaModule } from './idea/idea.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
    IdeaModule,
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [
    AppService,
    ...databaseProviders,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
