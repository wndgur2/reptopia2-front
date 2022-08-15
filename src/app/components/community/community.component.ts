import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  boardControl = new FormControl('');
  board?:string;

  constructor() { }

  ngOnInit(): void {
  }


}
