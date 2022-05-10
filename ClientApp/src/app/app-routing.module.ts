import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';
import { ReviewComponent } from './books/review.component';
import { ReviewDelComponent } from './books/review-del.component';

const routes: Routes = [
  { path: 'api', component: BooksComponent },
  { path: 'book', component: BookComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'delreview', component: ReviewDelComponent },
  { path: '', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
