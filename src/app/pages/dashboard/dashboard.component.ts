import { Component } from '@angular/core';
import { AppbarComponent } from '../../components/appbar/appbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [AppbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
