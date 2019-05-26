import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AuthorController } from './author/author.controller';
import { databaseProviders } from './db/database.providers';
import { IdeaController } from './idea/idea.controller';
import { IdeaModule } from './idea/idea.module';
import { IdeaService } from './idea/idea.service';
import { ideaProviders } from './idea/idea.providers';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [IdeaModule, UserModule],
  // imports: [GraphQLModule.forRoot({}), IdeaModule, UserModule],
  controllers: [
    AppController,
    CatsController,
    AuthorController,
    IdeaController,
  ],
  providers: [
    AppService,
    IdeaService,
    ...databaseProviders,
    ...ideaProviders,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
