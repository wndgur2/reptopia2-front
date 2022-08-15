import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css', '../shop.component.css']
})
export class TemperaturesComponent implements OnInit {

  sizes = getHeightCol(50, 25);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {id: 1, text: "Temperature 1"},
    {id: 1, text: "Temperature 2"},
    {id: 1, text: "Temperature 3"},
    {id: 1, text: "Temperature 4"},
    {id: 1, text: "Temperature 5"},
    {id: 1, text: "Temperature 6"},
    {id: 1, text: "Temperature 7"},
    {id: 1, text: "Temperature 8"},
    {id: 1, text: "Temperature 9"},
    {id: 1, text: "Humidity 10"},
    {id: 1, text: "Humidity 11"},
    {id: 1, text: "Humidity 12"},
    {id: 1, text: "Humidity 13"},
    {id: 1, text: "Humidity 14"},
    {id: 1, text: "Humidity 15"},
    {id: 1, text: "Humidity 16"},
  ];

}
