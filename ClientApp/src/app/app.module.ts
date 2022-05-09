import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';
import { ModelModule } from './models/model.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent],
  imports: [
    BrowserModule,
    //.withServerTransition({ appId: 'ng-cli-universal' }),
    //HttpClientModule,
    //FormsModule,
    AppRoutingModule,
    ModelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
