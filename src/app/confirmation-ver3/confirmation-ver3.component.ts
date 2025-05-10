import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { BreakableButtonComponent } from '../breakable-button/breakable-button.component';

@Component({
  selector: 'app-confirmation-ver3',
  imports: [NgStyle, BreakableButtonComponent],
  templateUrl: './confirmation-ver3.component.html',
  styleUrl: './confirmation-ver3.component.css'
})
export class ConfirmationVer3Component {
  count: number = 0;
  buttonPosition: { top: string; left: string } = { top: '23%', left: '45.68%' };

  constructor(private router: Router) {}

  goToSadPage() {
    if (this.count < 2) {
      this.buttonPosition = {
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%'
      };
      this.count++;
    } else {
      this.router.navigate(['/confirmation3']);
    }
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
