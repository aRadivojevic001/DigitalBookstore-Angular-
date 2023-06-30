import { Injectable } from "@angular/core";
import { Book } from "src/app/home/welcome/book.service";

export interface CurrentBookCart {
    id: number;
    currentCartBooks: Book[];
    totalPrice: number;
}

@Injectable()
export class CurrentBookCartService {
    public cart: Array<CurrentBookCart> = [];

    constructor() {
        this.calculateTotalPrice(); // Poziva se prilikom inicijalizacije servisa
    }

    getCart() {
        return this.cart;
    }

    calculateTotalPrice() {
        this.cart.forEach((cartItem) => {
            cartItem.totalPrice = 0; // Resetuj ukupnu cenu za svaki element

            cartItem.currentCartBooks.forEach((book) => {
                cartItem.totalPrice += book.price; // Dodaj cenu svake knjige na ukupnu cenu
            });
        });
    }
}

