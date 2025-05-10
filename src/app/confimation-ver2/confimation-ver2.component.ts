import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-confimation-ver2',
  imports: [NgStyle],
  templateUrl: './confimation-ver2.component.html',
  styleUrl: './confimation-ver2.component.css'
})
export class ConfimationVer2Component {
  count: number = 0;
  buttonPosition: { top: string; left: string } = { top: '87%', left: '32%' };

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
