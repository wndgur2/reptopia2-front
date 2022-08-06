import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html',
  styleUrls: ['./cages.component.css', '../shop.component.css']
})
export class CagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {text: "Cage 1"},
    {text: "Cage 2"},
    {text: "Cage 3"},
    {text: "Cage 4"},
    {text: "Cage 5"},
    {text: "Cage 6"},
    {text: "Cage 7"},
    {text: "Cage 8"},
    {text: "Cage 9"},
    {text: "Cage 10"},
    {text: "Cage 11"},
    {text: "Cage 12"},
    {text: "Cage 13"},
    {text: "Cage 14"},
    {text: "Cage 15"},
    {text: "Cage 16"},
  ];

}
