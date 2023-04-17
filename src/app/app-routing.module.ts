import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";


// Le module routing contient un tableau de type Routes avec toute les routes de l'applications
const routes: Routes = [
  // Le path indique l'url et le component le component concerné
  {path: '', component: LandingPageComponent},
  { path: 'facesnaps', component: FaceSnapListComponent },
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent}
];
@NgModule({
  // On enregistre les routes dans le routeur d'angular
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
