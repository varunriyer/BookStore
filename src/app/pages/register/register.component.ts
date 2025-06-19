import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-register',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  selectedTab: 'login' | 'signup' = 'login';

  showPassword = false;

  get isLogin(): boolean {
    return this.selectedTab === 'login';
  }

  get isSignup(): boolean {
    return this.selectedTab === 'signup';
  }
}
