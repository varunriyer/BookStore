import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-book-card',
  imports: [MatCardModule, MatTooltipModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent implements OnInit {
  @Input() book: any;

  rating: number = 0;
  reviews: number = 0;
  bookImagePath: string = '';
  availableImageNumbers = [7, 8, 10, 11, 12, 13, 14, 18, 20, 22, 23, 36];

  ngOnInit(): void {
    this.rating = parseFloat((Math.random() * 2 + 3).toFixed(1)); // 3.0 to 5.0
    this.reviews = Math.floor(Math.random() * 101); // 0 to 100

    const imageOptions = [7, 8, 10, 11, 12, 13, 14, 18, 20, 22, 23, 36];
    const randomIndex = Math.floor(Math.random() * imageOptions.length);
    const selectedImageNumber = imageOptions[randomIndex];

    this.bookImagePath = 'Image ' + selectedImageNumber + '.png';
  }
}
