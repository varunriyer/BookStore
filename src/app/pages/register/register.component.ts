import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  selectedTab: 'login' | 'signup' = 'login';
  showPassword = false;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  get isLogin(): boolean {
    return this.selectedTab === 'login';
  }

  get isSignup(): boolean {
    return this.selectedTab === 'signup';
  }

  get emailControl() {
    return this.isLogin
      ? this.loginForm.get('email')
      : this.signUpForm.get('email');
  }

  get passwordControl() {
    return this.isLogin
      ? this.loginForm.get('password')
      : this.signUpForm.get('password');
  }

  get nameControl() {
    return this.signUpForm.get('name');
  }

  get mobileControl() {
    return this.signUpForm.get('mobile');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
    });

    this.signUpForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z ]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }
}
