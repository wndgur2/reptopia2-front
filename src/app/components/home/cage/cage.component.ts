import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cage',
  templateUrl: './cage.component.html',
  styleUrls: ['./cage.component.css']
})
export class CageComponent implements OnInit {
  cage = {id: 0,text: '도돌이', cols: 90, rows: 60, color: 'lightblue'};
  constructor() {}

  ngOnInit(): void {
  }

}
