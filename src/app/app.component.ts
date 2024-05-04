import { Component, OnInit } from "@angular/core";
import { AuthService } from "./components/auth/auth.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    title = "reptopia2";
    backgroundColor = "white";

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.autoAuthUser();
    }
}
