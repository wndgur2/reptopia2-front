export interface Creature{
  id: number;

  //genetic
  species: string;
  birth: string;
  sex: string;
  morphs: [number, number][];

  //genetic character
  fear: number;
  eat: number;
  breed: number;
  sleep: number;

  //status
  name: string;
  length: number;
  weight: number;
  stress: number;
  sleepy: number;
  hunger: number;
  shedding: number;
}
