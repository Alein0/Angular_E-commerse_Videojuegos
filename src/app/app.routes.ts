import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component:ProductListComponent }, // Página principal
    { path: 'buscar', component: BuscarComponent },
    { path: 'contact', component: ContactComponent },
];
