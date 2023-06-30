import { EventEmitter, Injectable, Output } from "@angular/core";

export interface Book{
    id:number; 
    book_name:string;
    author:string;
    published_by:string;
    published_year:number;
    genre:any;
    price:number;
    pages:number;
    imageURL:string;
    authorURL:string;
}

@Injectable()
export class BookService{

    //! skipuje konstruktor
    book!:Book;
    bookWeFound!:Book;

    static bookList:Array<Book>=[
       //Knjiga1
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
    //Knjiga2
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
    //Knjiga3
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
    //Knjiga4
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
    //Knjiga5
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
    //Knjiga6
    {
        id:6,
        book_name:"Žena sa plavom zvezdom",
        author:"Pem Dženof",
        published_by:"Laguna",
        published_year:2021,
        genre:"History",
        price:650,
        pages:320,
        imageURL:"https://www.laguna.rs/_img/korice/5925/zena_sa_plavom_zvezdom-pem_dzenof_v.png",
        authorURL:'https://www.laguna.rs/_img/pisci/untitled-1_(163).jpg'
    },
    {
        //Knjiga7
        id:7,
        book_name:"Poklapanje",
        author:"Harlan Koben",
        published_by:"Delfi",
        published_year:2023,
        genre:"Thriller",
        price:1800,
        pages:500,
        imageURL:"https://www.laguna.rs/_img/korice/5924/poklapanje-harlan_koben_v.jpg",
        authorURL:'https://www.laguna.rs/_img/pisci/harlan-coben-photo-credit-jr-inside-out-project300.png'
    },
    {
        //Knjiga8
        id:8,
        book_name:"Semper idem",
        author:"Đorđe Lebović",
        published_by:"Delfi",
        published_year:2020,
        genre:"History",
        price:1400,
        pages:552,
        imageURL:"https://www.laguna.rs/_img/korice/3280/semper_idem_v.jpg",
        authorURL:'https://www.laguna.rs/_img/pisci/djordjelebovic.jpg'
    },
    {
        //Knjiga9
        id:9,
        book_name:"Estoril: Ratni roman",
        author:"Dejan Tiago-Stanković",
        published_by:"Laguna",
        published_year:2023,
        genre:"History",
        price:800,
        pages:350,
        imageURL:"https://www.laguna.rs/_img/korice/5409/estoril-dejan_tiago-stankovic_v.jpg",
        authorURL:'https://www.laguna.rs/_img/pisci/250_(2).jpg'
    },
    {
        //Knjiga10
        id:10,
        book_name:"Direktor",
        author:"K. I. Lin",
        published_by:"Delfi",
        published_year:2023,
        genre:"Romance",
        price:1300,
        pages:264,
        imageURL:"https://www.laguna.rs/_img/korice/5886/direktor-k_i_lin_v.jpg",
        authorURL:'https://www.laguna.rs/_img/pisci/martin.jpg'
    },
  {
    //Knjiga11
    id:11,
    book_name:"Sreća je piti čaj s tobom",
    author:"Mamen Sančes",
    published_by:"Laguna",
    published_year:2019,
    genre:"Romance",
    price:100,
    pages:296,
    imageURL:"https://www.laguna.rs/_img/korice/5496/sreca_je_piti_caj_s_tobom-mamen_sancez_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/mamensanchez-2-002.jpg'
  },
  {
    //Knjiga 12
    id:12,
    book_name:"Bolja strana",
    author:"Jelica Greganović",
    published_by:"Laguna",
    published_year:2022,
    genre:"Drama",
    price:800,
    pages:168,
    imageURL:"https://www.laguna.rs/_img/korice/5920/bolja_strana-jelica_greganovic_v.png",
    authorURL:'https://www.laguna.rs/_img/pisci/jelica.jpg'
  },
  {
    //Knjiga 13
    id:13,
    book_name:"Zvezda nad prazninom",
    author:"Dejan Stojiljković",
    published_by:"Laguna",
    published_year:2021,
    genre:"Thriller",
    price:1200,
    pages:328,
    imageURL:"https://www.laguna.rs/_img/korice/5810/zvezda_nad_prazninom-dejan_stojiljkovic_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/dejan-stojiljkovic.jpg'
  },
  {
    //Knjiga 14
    id:14,
    book_name:"Zamalek",
    author:"Dejan Tiago-Stanković",
    published_by:"Delfi",
    published_year:2023,
    genre:"History",
    price:1100,
    pages:352,
    imageURL:"https://www.laguna.rs/_img/korice/4647/zamalek-dejan_tiago-stankovic_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/250_(2).jpg'
  },
  {
    //Knjiga 15
    id:15,
    book_name:"Mileva Ajnštajn",
    author:"Slavenka Drakulić",
    published_by:"Delfi",
    published_year:2023,
    genre:"History",
    price:900,
    pages:216,
    imageURL:"https://www.laguna.rs/_img/korice/5830/mileva_anstajn_teorija_tuge-slavenka_drakulic_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/slavenka-drakulic-photo-by-roko-crnic.jpg'
  },
  {
    //Knjiga 16
    id:16,
    book_name:"Milutinov greh",
    author:"Vanja Bulić",
    published_by:"Laguna",
    published_year:2021,
    genre:"History",
    price:1300,
    pages:288,
    imageURL:"https://www.laguna.rs/_img/korice/5800/milutinov_greh_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/526.jpg'
  },

  {
    //Knjiga 17
    id:17,
    book_name:"Sa nama počinje",
    author:"Kolin Huver",
    published_by:"Laguna",
    published_year:2018,
    genre:"Drama",
    price:1000,
    pages:328,
    imageURL:"https://www.laguna.rs/_img/korice/5778/sa_nama_pocinje-kolin_huver_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/colleen-hoover---credit-chad-griffith.jpg'
  },
  {
    //Knjiga 18
    id:18,
    book_name:"Jedna noć sa vojvodom",
    author:"Džodi Elen Malpas",
    published_by:"Laguna",
    published_year:2020,
    genre:"Romace",
    price:1400,
    pages:312,
    imageURL:"https://www.laguna.rs/_img/korice/5907/jedna_noc_sa_vojvodom-dzodi_elen_malpas_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/dzodi-elen-malpas.jpg'
  },
  {
    //Knjiga 19
    id:19,
    book_name:"Malograđani",
    author:"Onore de Balzak",
    published_by:"Delfi",
    published_year:2021,
    genre:"Drama",
    price:700,
    pages:248,
    imageURL:"https://www.laguna.rs/_img/korice/5765/malogradjani-onore_de_balzak_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/untitled-2_(23).jpg'
  },
  {
    //Knjiga 20
    id:20,
    book_name:"Stari kalendar jedne ljubavi",
    author:"Andrej Makin",
    published_by:"Delfi",
    published_year:2023,
    genre:"History",
    price:700,
    pages:160,
    imageURL:"https://www.laguna.rs/_img/korice/5876/stari_kalendar_jedne_ljubavi-andrej_makin_v.png",
    authorURL:'https://www.laguna.rs/_img/pisci/andre-makine-copyright-jfpaga-350.png'
  },
  {
    //Knjiga 21
    id:21,
    book_name:"1984",
    author:"Džordž Orvel",
    published_by:"Laguna",
    published_year:2018,
    genre:"Drama",
    price:1100,
    pages:320,
    imageURL:"https://www.laguna.rs/_img/korice/5578/hiljadu_devetsto_osamdeset_cetvrta-dzordz_orvel_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/untitled-1_(165).jpg'
  },
  {
    //Knjiga 22
    id:22,
    book_name:"Čovek po imenu Uve",
    author:"Fredrik Bakman",
    published_by:"Laguna",
    published_year:2020,
    genre:"Comedy",
    price:1800,
    pages:360,
    imageURL:"https://www.laguna.rs/_img/korice/3366/covek_po_imenu_uve_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/backman.jpg'
  },
  {
    //Knjiga 23
    id:23,
    book_name:"Strelac – ilustrovano izdanje",
    author:"Paulo Koeljo",
    published_by:"Delfi",
    published_year:2021,
    genre:"Drama",
    price:100,
    pages:152,
    imageURL:"https://www.laguna.rs/_img/korice/5711/strelac-paulo_koeljo_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/koeljo.jpg'
  },
  {
    //Knjiga 24
    id:24,
    book_name:"Šljivin cvet u vazi od zlata",
    author:"Nepoznati pisac",
    published_by:"Delfi",
    published_year:2021,
    genre:"Comedy",
    price:2100,
    pages:864,
    imageURL:"https://www.laguna.rs/_img/korice/5766/sljivin_cvet_u_vazi_od_zlata-nepoznati_pisac_v.jpg",
    authorURL:'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
  },
  {
    //Knjiga 25
    id:25,
    book_name:"Poslednji jednorog",
    author:"Piter S. Bigl",
    published_by:"Laguna",
    published_year:2023,
    genre:"Thriller",
    price:1800,
    pages:232,
    imageURL:"https://www.laguna.rs/_img/korice/5872/poslednji_jednorog-piter_s_bigl_v.png",
    authorURL:'https://www.laguna.rs/_img/pisci/peter-beagle-no-credit-350.jpg'
  },
  {
    //Knjiga 26
    id:26,
    book_name:"Sa nama se završava",
    author:"Kolin Huver",
    published_by:"Delfi",
    published_year:2017,
    genre:"Romance",
    price:1000,
    pages:368,
    imageURL:"https://www.laguna.rs/_img/korice/4584/sa_nama_se_zavrsava-kolin_huver_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/colleen-hoover---credit-chad-griffith.jpg'
  },
  {
    //Knjiga 27
    id:27,
    book_name:"Besplatna dostava",
    author:"Vedrana Rudan",
    published_by:"Laguna",
    published_year:2022,
    genre:"Drama",
    price:800,
    pages:208,
    imageURL:"https://www.laguna.rs/_img/korice/5948/besplatna_dostava-vedrana_rudan_v.png",
    authorURL:'https://www.laguna.rs/_img/pisci/vedrana-rudan-by-rino-gropuzzo300.jpg'
  },
  {
    //Knjiga 28
    id:28,
    book_name:"Životinjska farma",
    author:"Džordž Orvel",
    published_by:"Delfi",
    published_year:2017,
    genre:"Comedy",
    price:500,
    pages:160,
    imageURL:"https://www.laguna.rs/_img/korice/5208/zivotinjska_farma-dzordz_orvel_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/untitled-1_(165).jpg'
  },
  {
    //Knjiga 29
    id:29,
    book_name:"Brod koji je zaplovio kroz maglu",
    author:"Srđan Valjarević",
    published_by:"Delfi",
    published_year:2022,
    genre:"Comedy",
    price:700,
    pages:280,
    imageURL:"https://www.laguna.rs/_img/korice/5908/brod_koji_je_zaplovio_kroz_maglu_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/valjarevic.jpg'
  },
  {
    //Knjiga 30
    id:30,
    book_name:"Pobednici",
    author:"Fredrik Bakman",
    published_by:"Laguna",
    published_year:2017,
    genre:"Drama",
    price:1500,
    pages:712,
    imageURL:"https://www.laguna.rs/_img/korice/5616/pobednici-fredrik_bakman_v.jpg",
    authorURL:'https://www.laguna.rs/_img/pisci/backman.jpg'
  },
    ]
    
    getBooks():Book[]{
        return BookService.bookList;
    }

    findBookByID(id:number){
        BookService.bookList.forEach( i =>{
            if(i.id == id) this.bookWeFound = i;
        });
        this.book=this.bookWeFound;
        return this.book;
    }
}