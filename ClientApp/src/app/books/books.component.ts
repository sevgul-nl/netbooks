import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Book } from '../models/book.model';

@Component({
  selector: 'books-component',
  templateUrl: './books.component.html',
  //styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private repo: Repository, private router: Router) {}

  get books(): Book[] {
    return this.repo.books;
  }

  listReviews(bookId: number) {
    this.repo.getBook(bookId);
    this.router.navigateByUrl('book');
  }
}
