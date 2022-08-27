import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css', '../shop.component.css']
})
export class FoodsComponent implements OnInit {

  sizes = getHeightCol(40, 25);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {id: 1, text: "Food 1", cost: 2000},
    {id: 1, text: "Food 2", cost: 2000},
    {id: 1, text: "Food 3", cost: 2000},
    {id: 1, text: "Food 4", cost: 2000},
    {id: 1, text: "Food 5", cost: 2000},
    {id: 1, text: "Food 6", cost: 2000},
    {id: 1, text: "Food 7", cost: 2000},
    {id: 1, text: "Food 8", cost: 2000},
    {id: 1, text: "Food 9", cost: 2000},
    {id: 1, text: "Food 10", cost: 2000},
    {id: 1, text: "Food 11", cost: 2000},
    {id: 1, text: "Food 12", cost: 2000},
    {id: 1, text: "Food 13", cost: 2000},
    {id: 1, text: "Food 14", cost: 2000},
    {id: 1, text: "Food 15", cost: 2000},
    {id: 1, text: "Food 16", cost: 2000},
  ];

}
