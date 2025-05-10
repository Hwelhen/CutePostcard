import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  imports: [NgStyle],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  count: number = 0;
  buttonPosition: { top: string; left: string } = { top: '85%', left: '25%' };

  constructor(private router: Router) {}

  goToSadPage() {
    if (this.count < 2) {
      this.buttonPosition = {
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%'
      };
      this.count++;
    } else {
      this.router.navigate(['/confirmation2']);
    }
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}



