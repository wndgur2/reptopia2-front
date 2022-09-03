import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Routes = {
  common:string[],
  home:string[],
  community:string[],
  shop:string[],
  breeders:string[]
}

const tips = {
  common:["인간도 눈을 핥을 수 있다면 얼마나 좋을까요?", "인간의 슈퍼푸드도 생길까요?", "", "인간은 왜 동물을 기를까요?"],
  home:["누군가에겐 들여다보기만 해도 스트레스죠.", "자신에 꼭 맞는 집이 있기 마련이에요."],
  community:["상대 존중은 인간의 기본입니다.", "의견을 마음껏 표출하세요."],
  shop:["R은 렙토피아 화폐인 Reppi를 의미합니다."],
  breeders:["언제든 입양은 신중히 해야합니다.", "렙토피아 분양소는 매일 자정에 초기화됩니다.", "필수 품목 없이는 입양이 불가합니다."]
};

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  tip = "";
  arr:string[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.arr = tips[this.router.url.split('/')[1] as keyof Routes];
    const rndN = Math.floor(Math.random()*(this.arr.length+tips.common.length));

    if(rndN >= tips.common.length)
      this.tip = this.arr[rndN-tips.common.length];
    else
      this.tip = tips.common[rndN];
  }

}
