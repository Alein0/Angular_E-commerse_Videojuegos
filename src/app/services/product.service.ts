import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product
{
  id: number; 

  name: string;

  price: string;

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

  { id: 1, name: 'The Last of Us', price: 'Precio 200.000 COP' , category: 'Acción', cantidad: 3,  description: 'En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país.', imageUrl: 'telasofas.png' },

    { id: 2, name: 'Assetto Corsa', price:'Precio 47.000 COP' , category: 'Carreras', cantidad: 3,  description: 'Assetto Corsa cuenta con un avanzado motor gráfico DirectX 11 que recrea un entorno inmersivo, con condiciones de luz dinámicas y superficies y materiales realistas. El motor de física avanzada está diseñado para ofrecer una experiencia de conducción superrealista, con aspectos y características de coches reales nunca vistos en ningún otro simulador de carreras.', imageUrl: 'aseto.png' },

    { id: 3, name: 'ELDEN RING', price:'Precio 200.000 COP' , category: 'Acción', cantidad: 3,  description: 'Las Tierras Intermedias forman parte de un extenso continente donde magníficos campos abiertos y gigantescas mazmorras con diseños tridimensionales complejos se conectan. Mientras exploras, te espera la emoción de descubrir amenazas desconocidas y abrumadoras.El dominio del terreno y conocer sus secretos pueden ayudarte a superar enemigos y a derrotar jefes formidables, o a conducir a los jugadores invasores hasta trampas.', imageUrl: 'Elden_Ring.jpg' }, 

    { id: 4, name: 'The Forest', price: 'Precio 31.000 COP', category: 'Supervivencia', cantidad: 3,  description: 'Como único superviviente del accidente de un avión de pasajeros, te encuentras en un misterioso bosque luchando por sobrevivir contra una sociedad de mutantes caníbales.Construye, explora y sobrevive en este aterrador simulador de terror de supervivencia en primera persona.', imageUrl: 'forest.png' },

    { id: 5, name: 'Cyberpunk 2077', price:'Precio 200.000 COP', category: 'Acción', cantidad: 3,  description: 'Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en la megalópolis de Night City, donde te pondrás en la piel de un mercenario o una mercenaria ciberpunk y vivirás su lucha a vida o muerte por la supervivencia. Mejorado y con contenido nuevo adicional gratuito. ', imageUrl: 'cyberpunk.png' },

    { id: 6, name: 'Rust', price: 'Precio 95.000 COP', category: 'Supervivencia', cantidad: 3,  description: 'El único objetivo en Rust es sobrevivir. Todo quiere que mueras: la fauna de la isla, los demás habitantes, el entorno y los demás supervivientes. Haz lo que sea necesario para sobrevivir otra noche.', imageUrl: 'rust.png' }, 

    { id: 7, name: 'Red Dead Redemption 2', price: 'Precio 240.000 COP', category: 'Acción', cantidad: 3,  description: 'América, 1899.Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y los mejores cazarrecompensas de la nación pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio del corazón de América. Mientras las divisiones internas aumentan y amenazan con separarlos a todos, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.', imageUrl: 'read dead.png' },

    { id: 8, name: 'F1® 24', price: 'Precio 80.000 COP', category: 'Carreras', cantidad: 3,  description: 'Forma parte de los 20 con EA SPORTS™ F1® 24, el videojuego oficial del 2024 FIA Formula One World Championship™. Libera tu espíritu de victoria para convertirte en leyenda en Carrera profesional de F1®, la primera gran actualización de este modo desde 2016. Conduce como los mejores y logra una sincronía perfecta con tu coche gracias al nuevo sistema EA SPORTS™ Dynamic Handling. Enciende tu pasión conectándote con tus equipos y pilotos favoritos y demuestra que tienes lo que hace falta en los nuevos modos y experiencias.', imageUrl: 'f1.png' }, 

    { id: 9, name: 'Grand Theft Auto V Enhanced', price: 'Precio 62.000 COP', category: 'Acción', cantidad: 3,  description: 'Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, el gobierno de los EE. UU. y la industria del espectáculo, deberán llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.', imageUrl: 'gta.png' },
  
  ])

  getProducts() {

    return this.products.asObservable();

  }
}

