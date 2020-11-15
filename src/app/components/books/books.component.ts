import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(response => {
      this.books = response;
      console.log(response)
    },
      error => { console.log(error); });
  }

}
