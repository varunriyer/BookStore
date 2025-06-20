import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [BookCardComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  bookList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
