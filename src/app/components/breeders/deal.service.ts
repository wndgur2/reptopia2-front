import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Deal } from "src/app/models/deal.model";
import serverUrl from "src/app/consts";

@Injectable({ providedIn: "root" })
export class DealService {
  private deals:Deal[] = [];
  private dealsUpdateListener = new Subject<Deal[]>();
  constructor(private http: HttpClient, private router : Router) {}

  getDeals() {
    this.http
      .get<{ message: string; deals: any }>(serverUrl + "/api/deals")
      .pipe(
        map(dealData => {
          return dealData.deals.map((deal:any) => {
            return {
              ...deal,
              id: deal._id,
            };
          });
        })
      )
      .subscribe(transformedDeals => {
        this.deals = transformedDeals;
        this.dealsUpdateListener.next([...this.deals]);
      });
  }

  getDealsUpdateListener() {
    return this.dealsUpdateListener.asObservable();
  }
}
