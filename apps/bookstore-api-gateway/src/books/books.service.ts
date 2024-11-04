import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.bookClient.send('books.createBook', createBookDto);
  }

  findAll() {
    return this.bookClient.send('books.findAllBooks', {});
  }

  findOne(id: number) {
    return this.bookClient.send('books.findOneBook', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookClient.send('books.updateBook', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.bookClient.send('books.removeBook', id);
  }
}
