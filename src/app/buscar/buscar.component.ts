import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-buscar',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

}
