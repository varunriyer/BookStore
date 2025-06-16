import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css',
})
export class AppbarComponent {}
