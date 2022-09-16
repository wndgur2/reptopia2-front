import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cages',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', '../shop.component.css']
})
export class ItemsComponent implements OnInit {

  rowHeight = (window.innerWidth/15 + window.innerHeight/3);
  colAmount = this.rowHeight/120;

  constructor() {
  }

  ngOnInit(): void {
  }

  tiles = [
    {id: 1,text: "Item 1", cost: "2000"},
    {id: 1,text: "Item 2", cost: "2000"},
    {id: 1,text: "Item 3", cost: "2000"},
    {id: 1,text: "Item 4", cost: "2000"},
    {id: 1,text: "Item 5", cost: "2000"},
    {id: 1,text: "Item 6", cost: "2000"},
    {id: 1,text: "Item 7", cost: "2000"},
  ];

}
