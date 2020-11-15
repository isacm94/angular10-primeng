import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
