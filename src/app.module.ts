import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AuthorController } from './author/author.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { databaseProviders } from './db/database.providers';
import { IdeaController } from './idea/idea.controller';
import { IdeaModule } from './idea/idea.module';
import { IdeaService } from './idea/idea.service';
import { ideaProviders } from './idea/idea.providers';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    // }),
    IdeaModule,
  ],
  controllers: [
    AppController,
    CatsController,
    AuthorController,
    IdeaController,
  ],
  providers: [AppService, IdeaService, ...databaseProviders, ...ideaProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
