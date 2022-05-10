import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Review } from './review.model';

const booksUrl = '/netbooks/api/books';
const bookUrl = '/netbooks/api/reviews';
const editReviewUrl = '/netbooks/api/review/edit';
const deleteReviewUrl = '/netbooks/api/review/delete';
@Injectable()
export class Repository {
  book: Book = new Book();
  books: Book[];
  review: Review = new Review();

  constructor(private http: HttpClient) {
    this.getBooks();
  }

  getBooks() {
    this.http.get<Book[]>(`${booksUrl}`).subscribe((bs) => (this.books = bs));
  }

  getBook(bookId: number) {
    this.http
      .get<Book>(`${bookUrl}/${bookId}`)
      .subscribe((bs) => (this.book = bs));
  }

  getReview(bookId: number, reviewId: number) {
    this.http
      .get<Review>(`${bookUrl}/${bookId}`)
      .subscribe((bs) => (this.review = bs));
  }

  saveReview(bookId: number, review: Review) {
    review.bookId = bookId;
    // alert(JSON.stringify(review));
    this.http
      .post(`${editReviewUrl}/${bookId}`, review)
      .subscribe(() => this.getBook(bookId));
  }

  deleteReview(bookId: number, review: Review) {
    review.bookId = bookId;
    // alert(JSON.stringify(review));
    this.http
      .post(`${deleteReviewUrl}/${bookId}`, review)
      .subscribe(() => this.getBook(bookId));
  }
}
