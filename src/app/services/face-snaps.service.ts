import { Injectable } from "@angular/core";
import { faceSnap } from "../models/face-snap-model";
@Injectable({
  providedIn: 'root',
})

export class FaceSnapsService{
  faceSnaps: faceSnap[] = [
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
