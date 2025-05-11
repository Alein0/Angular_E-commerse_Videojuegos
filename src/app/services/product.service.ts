import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = new BehaviorSubject<Product[]>([

    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', cantidad: 3,  description: 'Portatial gama alta', imageUrl: 'Img1.jpg' },

    { id: 2, name: 'Pc', price: 100, category: 'Electronics', cantidad: 3,  description: 'Portatial gama alta', imageUrl: 'Img1.jpg' },

    { id: 3, name: 'Lavador', price: 10000, category: 'Electronics', cantidad: 3,  description: 'Portatial gama alta', imageUrl: 'Img1.jpg' }, 

    { id: 5, name: 'carro', price: 100000, category: 'Electronics', cantidad: 3,  description: 'Portatial gama alta', imageUrl: 'Img1.jpg' },


  ])

  getProducts() {

    return this.products.asObservable();

  }
}

