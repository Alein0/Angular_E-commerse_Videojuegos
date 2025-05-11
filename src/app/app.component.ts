import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular202510';

  changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1')!.style.color = randomColor;

  }


}
