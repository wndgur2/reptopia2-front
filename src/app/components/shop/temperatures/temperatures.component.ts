import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css', '../shop.component.css']
})
export class TemperaturesComponent implements OnInit {

  sizes = getHeightCol(35, 25);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {id: 1, text: "Temperature 1", cost: 2400},
    {id: 1, text: "Temperature 2", cost: 2400},
    {id: 1, text: "Temperature 3", cost: 2400},
    {id: 1, text: "Temperature 4", cost: 2400},
    {id: 1, text: "Temperature 5", cost: 2400},
    {id: 1, text: "Temperature 6", cost: 2400},
    {id: 1, text: "Temperature 7", cost: 2400},
    {id: 1, text: "Temperature 8", cost: 2400},
    {id: 1, text: "Temperature 9", cost: 2400},
    {id: 1, text: "Humidity 10", cost: 2400},
    {id: 1, text: "Humidity 11", cost: 2400},
    {id: 1, text: "Humidity 12", cost: 2400},
    {id: 1, text: "Humidity 13", cost: 2400},
    {id: 1, text: "Humidity 14", cost: 2400},
    {id: 1, text: "Humidity 15", cost: 2400},
    {id: 1, text: "Humidity 16", cost: 2400},
  ];

}
