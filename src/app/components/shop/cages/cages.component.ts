import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html',
  styleUrls: ['./cages.component.css', '../shop.component.css']
})
export class CagesComponent implements OnInit {

  sizes = getHeightCol(2.5, 500);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() {
  }

  ngOnInit(): void {
  }

  tiles = [
    {text: "Cage 1", cost: "2000"},
    {text: "Cage 2", cost: "2000"},
    {text: "Cage 3", cost: "2000"},
    {text: "Cage 4", cost: "2000"},
    {text: "Cage 5", cost: "2000"},
    {text: "Cage 6", cost: "2000"},
    {text: "Cage 7", cost: "2000"},
    {text: "Cage 8", cost: "2000"},
    {text: "Cage 9", cost: "2000"},
    {text: "Cage 10", cost: "2000"},
    {text: "Cage 11", cost: "2000"},
    {text: "Cage 12", cost: "2000"},
    {text: "Cage 13", cost: "2000"},
    {text: "Cage 14", cost: "2000"},
    {text: "Cage 15", cost: "2000"},
    {text: "Cage 16", cost: "2000"},
  ];

}
