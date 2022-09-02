export interface Cage{
  id: number;

  creatureIds: number[];
  itemIds: number[];

  width: number;
  depth: number;
  height: number;

  temperature: number;
  humidity: number;

  pollution: number;
  naturalDecompositionPerDay: number;
  ventilation: number;

  brightness: number;
}
