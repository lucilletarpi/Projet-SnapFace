import { Component, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';
import  { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: faceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}
    ngOnInit() {
      this.buttonText = "Oh Snap!";
      const snapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
      }
  onSnap(){

  if (this.buttonText === "Oh Snap!") {
    this.faceSnapsService.snapFaceById(this.faceSnap.id, 'snap')
    this.buttonText = "Oops, unSnap!"
  }
  else {
    this.faceSnapsService.snapFaceById(this.faceSnap.id, 'unsnap')
    this.buttonText = "Oh Snap!"
  }


  }
}
