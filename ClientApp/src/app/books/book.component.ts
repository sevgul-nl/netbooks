import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Book } from '../models/book.model';
import { Review } from '../models/review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  //styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private repo: Repository, private router: Router) {}

  get book(): Book {
    return this.repo.book;
  }

  editReview(bookId: number, review?: Review) {
    if (review) this.repo.review = review;
    this.router.navigateByUrl('review');
  }

  deleteReview(bookId: number, review: Review) {
    this.repo.review = review;
    this.router.navigateByUrl('delreview');
  }
}
