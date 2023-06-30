import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent {

  //received je taj mat dialog koji smo iz book-a ubacili
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData : any){}

}
