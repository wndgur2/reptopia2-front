import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["../auth.css", "./signup.component.css"],
})
export class SignupComponent implements OnInit {
    isLoading = false;
    errorMessage = {
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
    };

    constructor(public authService: AuthService) {}

    ngOnInit(): void {}

    onSignUp(form: NgForm) {
        if (form.invalid) {
            this.updateErrorMessage();
            return;
        }
        if (form.value.password != form.value.checkPassword) {
            return;
        }
        this.authService.createUser(
            form.value.email,
            form.value.password,
            form.value.name
        );
    }

    //todo
    updateErrorMessage() {}
}
