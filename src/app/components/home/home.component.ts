import { Component, OnInit } from '@angular/core';

export interface Tile {
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
    {text: '도돌이, 양이', cols: 90, rows: 60, color: 'lightblue'},
    {text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {text: 'Three', cols: 90, rows: 60, color: 'lightpink'},
    {text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {text: 'Three', cols: 30, rows: 45, color: 'lightpink'},
    {text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {text: 'Three', cols: 100, rows: 100, color: 'lightpink'},
    {text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
    {text: 'One', cols: 120, rows: 80, color: 'lightblue'},
    {text: 'Two', cols: 45, rows: 60, color: 'lightgreen'},
    {text: 'Three', cols: 100, rows: 100, color: 'lightpink'},
    {text: 'Four', cols: 60, rows: 45, color: '#DDBDF1'},
  ];
}
