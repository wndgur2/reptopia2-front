import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Deal } from "src/app/models/deal.model";
import { DealService } from "../deal.service";

@Component({
    selector: "app-deals",
    templateUrl: "./deals.component.html",
    styleUrls: ["./deals.component.css"],
})
export class DealsComponent implements OnInit {
    species: string = "";
    deals: Deal[] = [];
    private dealsSub: Subscription;

    constructor(
        public dealService: DealService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.dealService.getDeals();
        this.dealsSub = this.dealService
            .getDealsUpdateListener()
            .subscribe((deals: Deal[]) => {
                this.deals = deals;
            });
    }

    ngOnDestroy() {
        this.dealsSub.unsubscribe();
    }
}
