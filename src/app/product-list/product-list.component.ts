import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Product
{
  id: number; 

  name: string;

  price: number;

  category: string;

  imageUrl: string;

 cantidad: number;
 
 description: string;

}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = []; // Crear el filtro para la busqueda los productos
  searchTerm: string = ''; // Crear el buscador

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

   searchProducts(): void {             // Función para la busqueda
    const term = this.searchTerm.trim().toLowerCase();

    if (term === '') {
      this.filteredProducts = this.products; // Muestra la lista
      return;
    }

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }
}
