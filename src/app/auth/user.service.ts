import { Injectable } from "@angular/core";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber : string;
  adress : string;
  genre: 'History' | 'Drama' | 'Comedy' | 'Romance' | 'Thriller';
}

@Injectable()
export class UserService {

  currentUser: User = UserService.dummyUserList[0];

  static dummyUserList: Array<User> = [
    {
      id: 1,
      firstName: 'Aleksandar',
      lastName: 'Radivojevic',
      email: "aleksandar@singidunum.ac.rs",
      password: "aleksandar123",
      phoneNumber : "+381637896578",
      adress : "Prote Protanovica 65",
      genre: 'History',
    },
    {
      id: 2,
      firstName: 'Nikola',
      lastName: 'Radivojevic',
      email: "nikola@singidunum.ac.rs",
      password: "nikola123",
      phoneNumber : "+381637896621",
      adress : "Halida Beslica 11",
      genre: 'Romance',
    }
  ];

  // Korisnicko ime
  getUserName(user: User): string {
    return user.email;
  }
  //Ime korisnika
  getFirstName(): string {
    return this.currentUser.firstName;
  }

  // ID korisnika
  getUserById(id: number): User | undefined {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
  }

  // Da li je mejl
  getUser(userEmail: string): User | undefined {
    //return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    //STAVLJA GA DA BUDE I TRENUTNI USER, TO RADI I ZA LOGIN
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    return this.currentUser;
  }

  // Da li je lozinka ispravna
  isPasswordCorrect(userEmail: string, password: string): boolean {
    return UserService.dummyUserList.find(userToFind =>
      (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  // firstName : string, lastName : string , email: string, password: string,phoneNumber:string,adress:string,genre :'History' | 'Drama' | 'Comedy' | 'Romance' | 'Thriller'

  // Registrujemo korisnika
  //algoritam za pronalazenje najveceg ID-a korisnika
  registerUser(firstName : string, lastName : string , email: string, password: string,phoneNumber:string,adress:string,genre :'History' | 'Drama' | 'Comedy' | 'Romance' | 'Thriller'): User {
    var maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
        if (maxId < user.id) {
            maxId = user.id
        }
    })
    var id = ++maxId;
    var user: User = {
      //vrednosti inputa koj isu uzewti iz html-a
      id,
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      adress,
      genre
    }
    //Ovo pusuje u trenutku sesije u array ali kada bi se refresovalo onda bi nestalo jer nemamo back za hendlovanje baze
    UserService.dummyUserList.push(user);

    this.currentUser = user;

    console.log(user);
    return user;
}
}
