import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [FormsModule, NgStyle],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  name: string = '';
  buttonPosition: { top: string; left: string } = { top: '50%', left: '50%' };

  constructor(private router: Router) {}

  checkName() {
    if (this.name === 'Влад' || this.name === 'Владя') {
      this.router.navigate(['/success']);
    } else {
      this.moveButton();
    }
  }

  moveButton() {
    this.buttonPosition = {
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%'
    };
  }
}







