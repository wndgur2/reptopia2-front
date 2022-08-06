import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css', '../shop.component.css']
})
export class TemperaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {text: "Temperature 1"},
    {text: "Temperature 2"},
    {text: "Temperature 3"},
    {text: "Temperature 4"},
    {text: "Temperature 5"},
    {text: "Temperature 6"},
    {text: "Temperature 7"},
    {text: "Temperature 8"},
    {text: "Temperature 9"},
    {text: "Humidity 10"},
    {text: "Humidity 11"},
    {text: "Humidity 12"},
    {text: "Humidity 13"},
    {text: "Humidity 14"},
    {text: "Humidity 15"},
    {text: "Humidity 16"},
  ];

}
