import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

type Routes = {
    common: string[];
    home: string[];
    community: string[];
    shop: string[];
    breeders: string[];
};

const tips = {
    common: [
        "피드백은 환영입니다. dkandjsl@gmail.com",
        "야생의 성체 크레는 대부분 개구리라네요?",
        "1994년까지만 해도 크레스티드 게코는 멸종된 종이었어요.",
        "인간도 눈을 핥을 수 있다면 얼마나 좋을까요?",
        "인간의 슈퍼푸드도 생길까요?",
        "인간은 왜 동물을 기를까요?",
        "행운을 주는 생물이 정말 있을까요?",
        "생명 윤리를 알아야 할까요?",
        "미래의 사육 환경은 어떨까요?",
    ],
    home: [
        "누군가에겐 들여다보기만 해도 스트레스죠.",
        "본인에 꼭 맞는 집이 있기 마련이에요.",
        "소중하게 대할수록 소중해집니다.",
    ],
    community: ["상대방 존중은 기본입니다.", "의견을 마음껏 표출하세요."],
    shop: [
        "물건을 팔 수는 없답니다.",
        "충동 구매는 좋지 않아요.",
        "물건 둘러보세요.",
    ],
    breeders: [
        "언제든 입양은 신중히 해야합니다.",
        "렙토피아 분양소는 매일 자정에 초기화됩니다.",
        "필수 품목 없이는 입양이 불가합니다.",
    ],
};

@Component({
    selector: "app-tip",
    templateUrl: "./tip.component.html",
    styleUrls: ["./tip.component.css"],
})
export class TipComponent implements OnInit {
    tip = "";
    arr: string[] = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.arr = tips[this.router.url.split("/")[1] as keyof Routes];
        const randNum = Math.floor(
            Math.random() * (this.arr.length + tips.common.length)
        );

        if (randNum >= tips.common.length)
            this.tip = this.arr[randNum - tips.common.length];
        else this.tip = tips.common[randNum];
    }
}
