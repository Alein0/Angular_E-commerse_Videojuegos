import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';


export const routes: Routes = [
    { path: '', component:PaginaPrincipalComponent }, // Página principal
    { path: 'contact', component: ContactComponent },
    { path: 'buscar', component: ProductListComponent },
];
