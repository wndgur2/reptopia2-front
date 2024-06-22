import { Component, OnInit } from "@angular/core";

export interface Tile {
    id: number;
    cols: number;
    rows: number;
    text: string;
}

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css", "../../app.component.css"],
})
export class HomeComponent implements OnInit {
    tiles: Tile[] = [
        { id: 0, text: "도돌이, 양이", cols: 1, rows: 1 },
        { id: 1, text: "Two", cols: 1, rows: 1 },
        { id: 2, text: "Three", cols: 2, rows: 1 },
        { id: 3, text: "Four", cols: 1, rows: 1 },
        { id: 4, text: "One", cols: 2, rows: 1 },
        { id: 5, text: "Two", cols: 1, rows: 1 },
        { id: 6, text: "Three", cols: 1, rows: 1 },
    ];

    rowHeight = window.innerWidth / 10 + window.innerHeight / 4;
    isPhone = window.innerWidth < 800;

    ngOnInit() {}
}
