import { Component, OnInit } from '@angular/core';

const commonTips=["인간도 손가락이 재생되면 얼마나 좋을까요?", "인간도 눈을 핥을 수 있다면 얼마나 좋을까요?", "인간의 슈퍼푸드도 생길까요?"];
const homeTips=["누군가에겐 들여다보기만 해도 스트레스죠.", "자신에 꼭 맞는 집이 있기 마련이에요."];
const communityTips=["상대 존중은 인간의 기본입니다."];
const shopTips=["R은 렙토피아 화폐인 Reppi를 의미합니다."];
const breedersTips=["언제든 입양은 신중히 해야합니다."];

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  tip = "";

  constructor() { }

  ngOnInit(): void {
    this.tip = commonTips[Math.floor(Math.random()*commonTips.length)];
  }

}
