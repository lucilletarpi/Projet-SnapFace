import { Component, OnInit, Input } from '@angular/core';
// on import OnInit depuis Angular
import { faceSnap } from '../models/face-snap-model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
// Pour que la propriété soit injecté à l'extérieur il faut utiliser @input
@Input() faceSnap!: faceSnap;


  // Création de propriété avec le nom de l'attribut et le type
  // le ! est utilisé pour enlever l'erreur en effet nous créé des propriétés sons les initialisé nous "promettons" a typeScript de le faire.

  // Avec le faceSnap model nous pouvons supprimer les propriété suivantes
  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // imageUrl!: string;
  buttonText!: string;
// La méthode ci dessous est appélé par Angular pour initialisé les propriétés

  ngOnInit() {
    // this.title = "Lucille";
    // this.description = "Moi";
    // this.createdDate = new Date();
    // this.snaps = 6;
    // this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.buttonText = "Oh Snap!"
    }
// Pour indiquer que la méthode fait appel a un événement elle doit commencer par on
onSnap(){
  // Au click les snaps sont incrementé
  // this.snaps++;
// Pour rendre dynamique le bouton lorsque l'utilisateur cela rajouter +1 puis enlever -1 s'il reclick
// si le texte du bouton est Oh Snap! alors +1 plus changement du texte
if (this.buttonText === "Oh Snap!") {
  this.faceSnap.snaps++;
  this.buttonText = "Oops, unSnap!"
}
// aussinon -1 plus changement du texte
else {
  this.faceSnap.snaps--;
  this.buttonText = "Oh Snap!"
}
}


}
