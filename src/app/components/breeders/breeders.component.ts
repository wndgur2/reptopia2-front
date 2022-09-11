import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breeders',
  templateUrl: './breeders.component.html',
  styleUrls: ['./breeders.component.css', '../../app.component.css']
})
export class BreedersComponent implements OnInit {
  isPhone = window.innerWidth < 1200;

  constructor() { }

  ngOnInit(): void {}
}
