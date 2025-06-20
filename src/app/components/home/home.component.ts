import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-home',
  imports: [BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
