import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css', '../shop.component.css']
})
export class MaterialsComponent implements OnInit {

  sizes = getHeightCol(50, 25);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {text: "Material 1"},
    {text: "Material 2"},
    {text: "Material 3"},
    {text: "Material 4"},
    {text: "Material 5"},
    {text: "Material 6"},
    {text: "Material 7"},
    {text: "Material 8"},
    {text: "Material 9"},
    {text: "Material 10"},
    {text: "Material 11"},
    {text: "Material 12"},
    {text: "Material 13"},
    {text: "Material 14"},
    {text: "Material 15"},
    {text: "Material 16"},
  ];

}
