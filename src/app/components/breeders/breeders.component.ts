import { Component, OnInit } from '@angular/core';

enum Species {
  CrestedGecko,
  LeopardGecko,
  BallPython
}

enum CrestedGeckoMorph{
  Harliqueen,
  Tiger,
  Flame,
  Harlequin,
  Pinstripe,
  Dalmatian,
  Spots,
  Creamsicle
}

class creature{
  species:Species;
  length:number;
  weight:number;
  cost:number;

  constructor(species:Species, length:number, weight:number, cost:number){
    this.species = species;
    this.length = length;
    this.weight = weight;
    this.cost = cost;
  }

  getSpecies(){
    return Species[this.species];
  }
}

interface breeder{
  name: string;
  creatures: creature[];
}

@Component({
  selector: 'app-breeders',
  templateUrl: './breeders.component.html',
  styleUrls: ['./breeders.component.css']
})
export class BreedersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  creatures = [new creature(0, 10, 23, 300), new creature(1, 15, 33, 150), new creature(2, 33, 39, 200)];

}
