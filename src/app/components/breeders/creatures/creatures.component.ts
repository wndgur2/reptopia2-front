import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

enum Species {
  "크레스티드 게코",
  "레오파드 게코",
  "볼 파이톤"
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
  name:string;
  species:Species;
  length:number;
  weight:number;
  cost:number;
  comment:string;

  constructor(name:string, species:Species, length:number, weight:number, cost:number, comment:string){
    this.name = name;
    this.species = species;
    this.length = length;
    this.weight = weight;
    this.cost = cost;
    this.comment = comment;
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
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent implements OnInit {

  species: string;

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('species')!)
    ));
  }

  creatures = [new creature("꼬북이", 1, 15, 33, 150, "먹성 개좋습니다."), new creature("장숙이", 2, 33, 39, 200, "발색 올라오는중."),new creature("삐용이", 0, 10, 23, 300, "슈푸보단 충식 선호합니다."), new creature("꼬북이", 1, 15, 33, 150, "먹성 개좋습니다."), new creature("장숙이", 2, 33, 39, 200, "발색 올라오는중.")];

}
