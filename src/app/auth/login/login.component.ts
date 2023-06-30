import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorExists = false;
  errorText = "";

  constructor (private userService: UserService, private router: Router) {}
  
  //Metod koji pokrecemo prilikom submisn-a.Osluskujemo samo email i pass polja
  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    //cita iz servisa preko metode getUser kako bi pronasao tog usera sa tom email adresom
    var user = this.userService.getUser(email);

    //Ukoliko user ne postoji
    if(!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user " + email;
      return;
    }

    //Ukoliko sifra nije dobra
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect."
      return;
    }
    
    //Ako je sve u redu
    this.errorExists = false;
    this.router.navigate(['']);
  }
  

}
