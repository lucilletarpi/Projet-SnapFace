import { Injectable } from "@angular/core";
import { faceSnap } from "../models/face-snap-model";
@Injectable({
  providedIn: 'root',
})

export class FaceSnapsService{
  faceSnaps: faceSnap[] = [
    {
      id:1,
      title:"Lucille",
      description:"Moi",
      createdDate: new Date(),
      snaps: 3096,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      location: 'Nice'
    },
    {
      id:2,
      title:"Nino",
      description:"Mon bébé",
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
    },
  ];

getAllFaceSnpas(): faceSnap[] {
  return this.faceSnaps
  }

getFaceSnapById(faceSnapId: number): faceSnap{
const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
if (!faceSnap) {
  throw new Error('FaceSnap not found')
}else {
  return faceSnap;
}
}
snapFaceById(faceSnapId:number, snapType: 'snap' | 'unsnap'): void {
 const faceSnap = this.getFaceSnapById(faceSnapId);
 snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}
