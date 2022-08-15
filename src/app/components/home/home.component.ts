import { Component, OnInit } from '@angular/core';

export interface Tile {
  id: number;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  tiles: Tile[] = [
    {id: 0,text: '도돌이, 양이', cols: 90, rows: 60, color: 'lightblue'},
    {id: 1,text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {id: 2,text: 'Three', cols: 90, rows: 60, color: 'lightpink'},
    {id: 3,text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {id: 4,text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {id: 5,text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {id: 6,text: 'Three', cols: 30, rows: 45, color: 'lightpink'},
    {id: 7,text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {id: 8,text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {id: 9,text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {id: 10,text: 'Three', cols: 100, rows: 100, color: 'lightpink'},
    {id: 11,text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {id: 12,text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {id: 13,text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {id: 14,text: 'Three', cols: 100, rows: 100, color: 'lightpink'},
    {id: 15,text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
  ];
}
