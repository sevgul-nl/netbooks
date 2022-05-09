import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.model';

const booksUrl = '/netbooks/api/books';
const reviewsUrl = '/netbooks/api/reviews/';

@Injectable()
export class Repository {
  book: Book;
  books: Book[];

  constructor(private http: HttpClient) {
    this.getBooks();
  }

  getBooks() {
    this.http.get<Book[]>(`${booksUrl}`).subscribe((bs) => (this.books = bs));
  }

  getReviews(bookId: number) {
    this.http
      .get<Book>(`${reviewsUrl}${bookId}`)
      .subscribe((bs) => (this.book = bs));
  }
}
