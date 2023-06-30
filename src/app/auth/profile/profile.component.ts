import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService){}


  // Izjednacavamo polja za inpute sa vrednostima koje imamo u interfejsu samog korisnika, 
  // sve to odmah prilikom inicijalizacije
  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      firstName:this.data.user.firstName,
      lastName:this.data.user.lastName,
      email: this.data.user.email,
      password: this.data.user.password,
      adress:this.data.user.adress,
      phoneNumber:this.data.user.phoneNumber,
      genre:this.data.user.genre
    }
  }

  // mehanizam koji ce se koristiti za izmenu samih korisnika, 
  // svaki put kad se unese vrednost da profileInput postaje ta vrednost
  finishEditing(form : NgForm){
    this.data.user.firstName = this.profileForInput.firstName;
    this.data.user.lastName = this.profileForInput.lastName;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.adress = this.profileForInput.adress;
    this.data.user.phoneNumber = this.profileForInput.phoneNumber;
    this.data.user.genre = this.profileForInput.genre;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = true;
    console.log(this.isEditing);
  }
}
