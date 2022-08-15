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
    {id: 1, text: "Material 1"},
    {id: 1, text: "Material 2"},
    {id: 1, text: "Material 3"},
    {id: 1, text: "Material 4"},
    {id: 1, text: "Material 5"},
    {id: 1, text: "Material 6"},
    {id: 1, text: "Material 7"},
    {id: 1, text: "Material 8"},
    {id: 1, text: "Material 9"},
    {id: 1, text: "Material 10"},
    {id: 1, text: "Material 11"},
    {id: 1, text: "Material 12"},
    {id: 1, text: "Material 13"},
    {id: 1, text: "Material 14"},
    {id: 1, text: "Material 15"},
    {id: 1, text: "Material 16"},
  ];

}
