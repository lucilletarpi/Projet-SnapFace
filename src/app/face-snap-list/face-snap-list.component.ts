import { Component, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps !: faceSnap[];

  constructor(private faceSnapsService: FaceSnapsService){ }

  ngOnInit(){
    // Maintenant il nous suffit juste d'indiquer les valeurs voulu

    // données sous forme de tableau

    this.faceSnaps = this.faceSnapsService.faceSnaps;
}
}
