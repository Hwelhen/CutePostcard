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

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
