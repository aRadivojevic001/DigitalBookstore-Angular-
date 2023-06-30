import { Component, OnInit, ViewChild } from '@angular/core';
import { Book, BookService } from './book.service';
import { inject } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutBookComponent } from './about-book/about-book.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //Definisemo bnook lsitu kao prazan niz, book service i filtriranu lista za prikaz
  bookList: Book[] = [];
  bookService: BookService;
  bookFiltered: Book[];


  //pravimo objekat sa svim mogucim zanrovima
  genres = {
    History: false,
    Drama: false,
    Romance: false,
    Thriller: false,
    Comedy: false
  };

  publisher = {
    Laguna: false,
    Delfi: false
  }

  filterPrice !: number;
  filterPage !: number;
  filterYear !: number;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.bookList = bookService.getBooks();
    this.bookFiltered = this.bookList;
  }

  ngOnInit(): void {
      
  }

  //hvata #sidenav
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpened: boolean = false;

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    this.sidenav.toggle();
  }



  //uzima ime iz book name i ime iz filtera stavlja u lower
  filterBySearch(event_target: string){
    if(event_target === ""){
      this.bookFiltered = this.bookList
    }else {
      this.bookFiltered = this.bookList.filter(
        book => (
          book?.book_name.toLowerCase().includes(event_target.toLowerCase()) ||
          book?.author.toLowerCase().includes(event_target.toLowerCase())
        )
      );

    }
    
  }

  //filtriranje po zanrovima
  filterBooksByGenre() {
    
    if (!Object.values(this.genres).some(Boolean)) {
      this.bookFiltered = this.bookList;
    } else {
      this.bookFiltered = this.bookList.filter(book =>
        (this.genres.History && book.genre === 'History') ||
        (this.genres.Drama && book.genre === 'Drama') ||
        (this.genres.Romance && book.genre === 'Romance') ||
        (this.genres.Thriller && book.genre === 'Thriller') ||
        (this.genres.Comedy && book.genre === 'Comedy')
      );
    }
  }

  //filtriranje po imenu izdavaca
  filterBooksByPublisher() {
    //some predefinisana metoda koja radi sa true i false 
    if (!Object.values(this.publisher).some(Boolean)) {
      this.bookFiltered = this.bookList;
    } else {
      this.bookFiltered = this.bookList.filter(book =>
        (this.publisher.Laguna && book.published_by === 'Laguna') ||
        (this.publisher.Delfi && book.published_by === 'Delfi')
      );
    }
  }


  //filtriranje po ceni
  filterByPrice() {
    if (!this.filterPrice) {
      this.bookFiltered = this.bookList;
    } else {
      this.bookFiltered = this.bookList.filter(book => book.price <= this.filterPrice);
    }
  }

  //filtriranje po stranicama
  filterByPage() {
    if (!this.filterPage) {
      this.bookFiltered = this.bookList;
    } else {
      this.bookFiltered = this.bookList.filter(book => book.pages <= this.filterPage);
    }
  }

  //filtriranje po godini izdavanja
  filterByYear() {
    if (!this.filterYear) {
      this.bookFiltered = this.bookList;
    } else {
      this.bookFiltered = this.bookList.filter(book => book.published_year == this.filterYear);
    }
  }




  
  
  
  
  
  
  
  



 
}
