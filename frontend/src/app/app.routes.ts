import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inscrire', component: InscriptionComponent }
];
