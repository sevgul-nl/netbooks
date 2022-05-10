import { Component } from '@angular/core';

import { Repository } from '../models/repository';
import { Book } from '../models/book.model';
import { Review } from '../models/review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'review-component',
  templateUrl: 'review.component.html',
})
export class ReviewComponent {
  constructor(private repo: Repository, private router: Router) {}
  showError: boolean = false;

  get book(): Book {
    return this.repo.book;
  }

  get review(): Review {
    return this.repo.review;
  }

  saveReview(bookId: number, review: Review) {
    this.repo.saveReview(bookId, review);
    this.router.navigateByUrl('book');
  }
}
