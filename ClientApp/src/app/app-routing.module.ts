import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';

const routes: Routes = [
  { path: 'api', component: BooksComponent },
  { path: 'reviews', component: BookComponent },
  { path: '', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
