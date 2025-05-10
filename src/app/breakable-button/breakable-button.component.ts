import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-breakable-button',
  imports: [NgIf],
  templateUrl: './breakable-button.component.html',
  styleUrl: './breakable-button.component.css',
})
export class BreakableButtonComponent {
  state: string = 'intact';
  isClickable: boolean = false;
  clickCount: number = 0;

  constructor(private router: Router) {}

  breakProtection() {
    this.clickCount++;
    if (this.clickCount > 1) {
      this.state = 'broken';
      this.isClickable = true;
    }
  }

  onButtonClick() {
    if (this.isClickable) {
      this.router.navigate(['/sad']);
    }
  }
}


