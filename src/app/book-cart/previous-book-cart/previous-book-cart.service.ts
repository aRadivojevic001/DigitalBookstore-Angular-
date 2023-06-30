import { Injectable } from "@angular/core";
import { Book } from "src/app/home/welcome/book.service";

export interface BookCart {
    id: number;
    //Niz knjiga koje su kupljene
    previousCartBooks: Book[];
    // ukupna cena svih knjiga u korpi
    totalPrice: number;
}

@Injectable()
export class PreviousBookCartService {
    public cart: Array<BookCart> = [
        {
            id:1,
            previousCartBooks:[
                {
                    id:1,
                    book_name:"Putar i parizer",
                    author:"Jerko Mihaljević",
                    published_by:"Laguna",
                    published_year:2023,
                    genre:"Drama",
                    price:878,
                    pages:224,
                    imageURL:"https://www.laguna.rs/_img/korice/5950/putar_i_parizer_v.png",
                    authorURL:'https://www.laguna.rs/_img/pisci/jerko-7.jpg'
            },
    
            {
                    id:2,
                    book_name:"Krvavi mesec",
                    author:"Ju Nesbe",
                    published_by:"Delfi",
                    published_year:2023,
                    genre:"Crime",
                    price:1500,
                    pages:496,
                    imageURL:"https://www.laguna.rs/_img/korice/5818/krvavi_mesec-ju_nesbe_v.jpg",
                    authorURL:'https://www.laguna.rs/_img/pisci/nesbe2.jpg'
            },
           
            ],
            totalPrice:0,
        },
    
        {
            id:2,
            previousCartBooks:[
                {
    
                    id:3,
                    book_name:"Atlas – priča Tate Solta",
                    author:"Lusinda Rajli, Hari Vitaker",
                    published_by:"Laguna",
                    published_year:2023,
                    genre:"Romance",
                    price:1100,
                    pages:680,
                    imageURL:"https://www.laguna.rs/_img/korice/5846/atlas_prica_tate_solta-lusinda_rajli-_hari_vitaker_v.png",
                    authorURL:'https://www.laguna.rs/_img/pisci/untitled-1_(125).jpg'
            },
    
            {
                    id:4,
                    book_name:"Srbin kojekude",
                    author:"Bojan Ljubenović",
                    published_by:"Delfi",
                    published_year:2022,
                    genre:"Comedy",
                    price:500,
                    pages:312,
                    imageURL:"https://www.laguna.rs/_img/korice/5927/srbin_kojekude-bojan_ljubenovic_v.jpg",
                    authorURL:'https://www.laguna.rs/_img/pisci/bojan-ljubenovic.jpg'
            },
    
            {
                    id:5,
                    book_name:"Odakle sam bila",
                    author:"Dejan Tiago-Stanković",
                    published_by:"Delfi",
                    published_year:2021,
                    genre:"History",
                    price:1050,
                    pages:328,
                    imageURL:"https://www.laguna.rs/_img/korice/5630/odakle_sam_bila_vise_nisam-dejan_tiago-stankovic_v.jpg",
                    authorURL:'https://www.laguna.rs/_img/pisci/250_(2).jpg'
            },
           
            ],
            totalPrice:0,
        },
    
        {
            id:3,
            previousCartBooks:[
                {
                    id:1,
                    book_name:"Putar i parizer",
                    author:"Jerko Mihaljević",
                    published_by:"Laguna",
                    published_year:2023,
                    genre:"Drama",
                    price:878,
                    pages:224,
                    imageURL:"https://www.laguna.rs/_img/korice/5950/putar_i_parizer_v.png",
                    authorURL:'https://www.laguna.rs/_img/pisci/jerko-7.jpg'
            },
            ],
            totalPrice:0,
        }
    ];

    constructor() {
        this.calculateTotalPrice(); // Poziva se prilikom inicijalizacije servisa
    }

    getPreviusCart() {
        return this.cart;
    }

    calculateTotalPrice() {
        this.cart.forEach((cartItem) => {
            cartItem.totalPrice = 0; // Resetuj ukupnu cenu za svaki element

            cartItem.previousCartBooks.forEach((book) => {
                cartItem.totalPrice += book.price; // Dodaj cenu svake knjige na ukupnu cenu
            });
        });
    }
}
