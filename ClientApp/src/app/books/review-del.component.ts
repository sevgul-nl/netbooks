import { Component } from '@angular/core';

import { Repository } from '../models/repository';
import { Book } from '../models/book.model';
import { Review } from '../models/review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'review-del-component',
  templateUrl: 'review-del.component.html',
})
export class ReviewDelComponent {
  constructor(private repo: Repository, private router: Router) {}
  showError: boolean = false;

  get book(): Book {
    return this.repo.book;
  }

  get review(): Review {
    return this.repo.review;
  }

  deleteReview(bookId: number, review: Review) {
    this.repo.deleteReview(bookId, review);
    this.router.navigateByUrl('book');
  }
}
