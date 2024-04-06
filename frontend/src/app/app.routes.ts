import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { SmartphonesComponent } from "./pages/smartphones/smartphones.component";
import { CartesComponent } from "./pages/cartes/cartes.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inscrire', component: InscriptionComponent },
    { path: 'smartphones', component: SmartphonesComponent},
    { path: 'cartes', component: CartesComponent},
    { path: 'panier', loadComponent: () => import('./pages/panier/panier.component').then(m => m.PanierComponent) }
];
