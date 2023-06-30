import { Component } from '@angular/core';
import { PreviousBookCartService } from './previous-book-cart.service';


@Component({
  selector: 'app-previous-book-cart',
  templateUrl: './previous-book-cart.component.html',
  styleUrls: ['./previous-book-cart.component.css']
})
export class PreviousBookCartComponent {
  constructor(public previousBookCartService: PreviousBookCartService) {}
}
