import { Injectable } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from 'apps/bookstore-api-gateway/src/books/dto/create-book.dto';
import { BookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'title-1',
      author: 'author-1',
      rating: '3.7',
    },

    {
      id: 2,
      title: 'title-2',
      author: 'author-2',
      rating: '4.7',
    },
  ];

  create(createBookDto: CreateBookDto) {
    console.log('in', this.books)
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };
    this.books.push(newBook);
    console.log('in', this.books)
    // this.push(newBook);
    return newBook;
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
