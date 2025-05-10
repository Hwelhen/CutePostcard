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
  count: number = 0;
  buttonPosition: { top: string; left: string } = { top: '90%', left: '35%' };

  constructor(private router: Router) {}

  checkName() {
    if (this.name === 'Влад' || this.name === 'Владя' || this.name === 'влад' || this.name === 'владя' || this.name === 'Владислав' || this.name === 'владислав') {
      this.router.navigate(['/success']);
    } else {
      this.moveButton();
    }
  }

  moveButton() {
    if (this.count < 2) {
      this.buttonPosition = {
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%'
      };
      this.count++;
    } else {
      this.router.navigate(['/confirmation']);
    }
  }

/*
  moveButton() {
    const button = document.getElementById('nameButton');
    if (button) {
      // Меняем положение кнопки несколько раз
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          button.style.position = 'absolute';
          button.style.top = Math.random() * window.innerHeight + 'px';
          button.style.left = Math.random() * window.innerWidth + 'px';
        }, i * 500);
      }
      setTimeout(() => {
        
      }, 3000);
    }
  }*/
}











