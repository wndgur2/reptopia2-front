import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["../auth.css"],
})
export class LoginComponent implements OnInit {
    isLoading = false;

    constructor(public authService: AuthService) {}

    ngOnInit(): void {}

    onLogIn(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    }
}
