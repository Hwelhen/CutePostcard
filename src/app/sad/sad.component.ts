import { Component } from '@angular/core';
import { SadCatsComponent } from '../sad-cats/sad-cats.component';

@Component({
  selector: 'app-sad',
  imports: [SadCatsComponent],
  templateUrl: './sad.component.html',
  styleUrl: './sad.component.css'
})
export class SadComponent {

}


