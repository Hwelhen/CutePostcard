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
  t: number = 90;
  l: number = 32;
  buttonPosition: { top: string; left: string } = { top: '90%', left: '32%' };

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
      let bt = this.t;
      while (this.t != bt && this.t < 80) {
        this.t = Math.random() * 100
      }
      let bl = this.l;
      while (this.l != bl && this.l < 60) {
        this.l = Math.random() * 100
      }
      this.buttonPosition = {
        top: this.t + '%',
        left: this.l + '%'
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











