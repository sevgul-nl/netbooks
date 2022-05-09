import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Book } from '../models/book.model';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  //styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private repo: Repository) {}

  get book(): Book {
    return this.repo.book;
  }

  addReviews(bookId: number) {}

  editReviews(reviewId: number) {}

  deleteReviews(reviewId: number) {}
}
