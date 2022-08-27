import { Component, OnInit } from '@angular/core';
import { getHeightCol } from '../consts';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css', '../shop.component.css']
})
export class MaterialsComponent implements OnInit {

  sizes = getHeightCol(30, 25);
  rowHeight = this.sizes[0];
  colSize = this.sizes[1];

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {id: 1, text: "Material 1", cost: 100},
    {id: 1, text: "Material 2", cost: 100},
    {id: 1, text: "Material 3", cost: 100},
    {id: 1, text: "Material 4", cost: 100},
    {id: 1, text: "Material 5", cost: 100},
    {id: 1, text: "Material 6", cost: 100},
    {id: 1, text: "Material 7", cost: 100},
    {id: 1, text: "Material 8", cost: 100},
    {id: 1, text: "Material 9", cost: 100},
    {id: 1, text: "Material 10", cost: 100},
    {id: 1, text: "Material 11", cost: 100},
    {id: 1, text: "Material 12", cost: 100},
    {id: 1, text: "Material 13", cost: 100},
    {id: 1, text: "Material 14", cost: 100},
    {id: 1, text: "Material 15", cost: 100},
    {id: 1, text: "Material 16", cost: 100},
  ];

}
