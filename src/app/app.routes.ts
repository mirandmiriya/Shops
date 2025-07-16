import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Design } from './components/design/design';


export const routes: Routes = [
  { path: 'homepage', component: Home },       // Startseite
  { path: 'products', component: Products },  // Produkteseite
  { path: 'designYourshirt', component: Design }  // Produkteseite
  ,
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];
