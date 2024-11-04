import { Module } from '@nestjs/common';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';
import { UsersModule } from './users/users.module';
import { BooksAppModule } from 'apps/books/src/books-app.module';
// import { BooksModule } from './project/books/books.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksAppModule, BooksModule],
  controllers: [BookstoreApiGatewayController],
  providers: [BookstoreApiGatewayService],
})
export class BookstoreApiGatewayModule {}
