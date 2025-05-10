import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';

interface Cat {
  x: number;
  y: number;
  dx: number; // Изменение по оси X
  dy: number; // Изменение по оси Y
  image: string;
  hits: number;
}

@Component({
  selector: 'app-sad-cats',
  imports: [NgStyle, NgFor, NgForOf],
  templateUrl: './sad-cats.component.html',
  styleUrl: './sad-cats.component.css'
})
export class SadCatsComponent implements OnInit {
  cats: Cat[] = [];
  kisses: { x: number, y: number }[] = [];

  private catImages = [
    '/gifs/sad_cats/cat1.gif', // Замените на реальные URL гифок
    '/gifs/sad_cats/cat2.gif',
    '/gifs/sad_cats/cat3.gif',
    '/gifs/sad_cats/cat4.gif',
    '/gifs/sad_cats/cat5.gif',
    '/gifs/sad_cats/cat6.gif',
    '/gifs/sad_cats/cat7.gif',
    '/gifs/sad_cats/cat8.gif',
    '/gifs/sad_cats/cat9.gif',
    '/gifs/sad_cats/cat10.gif',
    '/gifs/sad_cats/cat11.gif',
    '/gifs/sad_cats/cat12.gif',
    '/gifs/sad_cats/cat13.gif',
    '/gifs/sad_cats/cat14.gif',
    '/gifs/sad_cats/cat15.gif',
    '/gifs/sad_cats/cat16.gif'
  ];

  constructor() {}

  ngOnInit(): void {
    this.addCat();
    this.startCatAnimation();
  }

  addCat() {
    const cat: Cat = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() < 0.5 ? -1 : 1) * (/*Math.random() * */10 + 1), // Случайное направление по X
      dy: (Math.random() < 0.5 ? -1 : 1) * (/*Math.random() * */10 + 1), // Случайное направление по Y
      image: this.catImages[Math.floor(Math.random() * 15)],
      hits: 0
    };
    this.cats.push(cat);
  }


  startCatAnimation() {
    setInterval(() => {
      this.cats.forEach(cat => {
        // Двигаем котика
        cat.x += cat.dx;
        cat.y += cat.dy;

        // Проверяем столкновение с границами
        if (cat.x < 0 || cat.x > window.innerWidth - 100) {
          cat.dx *= -1; // Отражаем по оси X
          this.catHit(cat); // Меняем изображение при столкновении
        }
        if (cat.y < 0 || cat.y > window.innerHeight - 100) {
          cat.dy *= -1; // Отражаем по оси Y
          this.catHit(cat); // Меняем изображение при столкновении
        }

        // Ограничиваем положение котика в пределах окна
        if (cat.x < 0) cat.x = 0;
        if (cat.x > window.innerWidth - 100) cat.x = window.innerWidth - 100;
        if (cat.y < 0) cat.y = 0;
        if (cat.y > window.innerHeight - 100) cat.y = window.innerHeight - 100;
      });
    }, 100);
  }

  catHit(cat: Cat) {
    console.log('Котик был ударен! Hits: ${cat.hits}');
    cat.hits++;
    if (cat.hits >= 3) {
      const nextImageIndex = (this.catImages.indexOf(cat.image) + 1) % this.catImages.length;
      cat.image = this.catImages[nextImageIndex];
      cat.hits = 0; // Сбросить счетчик ударов
    }
  }
}
