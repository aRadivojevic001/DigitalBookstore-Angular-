import { Component, Input } from '@angular/core';
import { Book } from '../book.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutBookComponent } from '../about-book/about-book.component';
import { CurrentBookCart, CurrentBookCartService } from 'src/app/book-cart/current-book-cart/current-book-cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book!:Book;

  constructor(private dialog : MatDialog,private currentCartService : CurrentBookCartService){}

  onOpen(){
    this.dialog.open(AboutBookComponent, {  
      width: "40vw",
      data:{
      BookId: this.book.id,
      BookName : this.book.book_name,
      BookAuthor: this.book.author,
      BookPublisher : this.book.published_by,
      BookYear : this.book.published_year,
      BookGenre : this.book.genre,
      BookPrice : this.book.price,
      BookPages : this.book.pages,
      BookAuthorUrl : this.book.authorURL,
      BookImageUrl : this.book.imageURL
     }
    });
  }

  addToCart() {
    // Provjeri postoji li već postojeći kart
    const existingCart = this.currentCartService.cart.find(cart => cart.id === 1);
  
    if (existingCart) {
      // Kart već postoji, dodaj knjigu u postojeći kart
      existingCart.currentCartBooks.push({
        id: this.book.id,
        book_name: this.book.book_name,
        author: this.book.author,
        published_by: this.book.published_by,
        published_year: this.book.published_year,
        genre: this.book.genre,
        price: this.book.price,
        pages: this.book.pages,
        imageURL: this.book.imageURL,
        authorURL: this.book.authorURL
      });
    } else {
      // Kart ne postoji, stvori novi kart i dodaj knjigu u njega
      const newCart: CurrentBookCart = {
        id: 1,
        currentCartBooks: [{
          id: this.book.id,
          book_name: this.book.book_name,
          author: this.book.author,
          published_by: this.book.published_by,
          published_year: this.book.published_year,
          genre: this.book.genre,
          price: this.book.price,
          pages: this.book.pages,
          imageURL: this.book.imageURL,
          authorURL: this.book.authorURL
        }],
        totalPrice: 0,
      };
      this.currentCartService.cart.push(newCart);
    }
  
    this.currentCartService.calculateTotalPrice();
    alert("Added to cart");
  }

}