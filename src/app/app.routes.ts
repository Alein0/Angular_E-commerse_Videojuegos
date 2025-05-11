import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component:ProductListComponent }, // Página principal
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];
