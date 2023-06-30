import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './auth/user.service';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app-routing.module';
import { BookComponent } from './home/welcome/book/book.component';
import { BookService } from './home/welcome/book.service';
import { AboutBookComponent } from './home/welcome/about-book/about-book.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { PreviousBookCartComponent } from './book-cart/previous-book-cart/previous-book-cart.component';
import { CurrentBookCartComponent } from './book-cart/current-book-cart/current-book-cart.component';
import { PreviousBookCartService } from './book-cart/previous-book-cart/previous-book-cart.service';
import { CurrentBookCartService } from './book-cart/current-book-cart/current-book-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    BookComponent,
    AboutBookComponent,
    BookCartComponent,
    ProfileComponent,
    PreviousBookCartComponent,
    CurrentBookCartComponent
  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   MaterialModule,
   FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule,
   RoutingModule,
  ],
  providers: [BookService, UserService,PreviousBookCartService,CurrentBookCartService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }