import { Component, OnInit } from '@angular/core';
import { faceSnap } from './models/face-snap-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps !: faceSnap[];


  ngOnInit(){
    // Maintenant il nous suffit juste d'indiquer les valeurs voulu

    // données sous forme de tableau

    this.faceSnaps = [
    {
      title:"Lucille",
      description:"Moi",
      createdDate: new Date(),
      snaps: 3096,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      location: 'Nice'
    },
    {
      title:"Nino",
      description:"Mon bébé",
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
    },
  ];
  }
}
