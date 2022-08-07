import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css', '../shop.component.css']
})
export class FoodsComponent implements OnInit {

  sizes = getHeightCol(2.5, 400);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {text: "Food 1"},
    {text: "Food 2"},
    {text: "Food 3"},
    {text: "Food 4"},
    {text: "Food 5"},
    {text: "Food 6"},
    {text: "Food 7"},
    {text: "Food 8"},
    {text: "Food 9"},
    {text: "Food 10"},
    {text: "Food 11"},
    {text: "Food 12"},
    {text: "Food 13"},
    {text: "Food 14"},
    {text: "Food 15"},
    {text: "Food 16"},
  ];

}
