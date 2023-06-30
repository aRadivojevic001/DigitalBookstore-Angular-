import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puter_i_parizer';
  profileOpened!: boolean;

  //Da bi preko matDialog-a citali i UserService da bi pristupili userima
  constructor(public userService: UserService, private dialog: MatDialog) {}

  //kada registrujemo usera mi ga ubacamo u userServiceArray i odavde vadimo u prikazujemo u toolbar
  openProfile(userId: number){
    this.profileOpened = true;
    
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "40vw",
      data: { user: this.userService.getUserById(userId) }
    })

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = true
    })
  } 
}
