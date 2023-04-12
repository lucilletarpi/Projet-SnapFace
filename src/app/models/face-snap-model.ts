// Type personnalisé
// Ci-joint un modéle de données qui comporte tout les propriétés nécessaire et modifiable

// export class FaceSnap {
//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imageUrl: string;

//   constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//     this.title = title;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//   }
// }

// Pour etre plus rapide il y a un raccourci TypeScript si nous utilisons un constructor nous passons en argument les propriétés et ajoutant le modificateur public et nous pouvons supprimer les déclarations et initalisation

// export class faceSnap {


// constructor(
//   public title: string,
//   public description: string,
//   public createdDate: Date,
//   public snaps: number,
//   public imageUrl: string,
//   public location?: string
//   )
//   {
// }
// }

// On peut aussi pour avoir une classe plus simple faire comme ci-dessous:

export class faceSnap {
  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  // le ? inidque qu'il s'agit d'une donné optionnelle
  location?:string
}
