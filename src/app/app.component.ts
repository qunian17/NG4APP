import { Component } from '@angular/core';
// 把下列代码放在app.component.ts的顶部，仅次于 import 语句 位置很重要，虽然不知道为什么
// 放在@Componet之后调用不到对应的Hero对象
import {Hero} from './hero'
const Heroes: Hero[] = [
  { name: '红内内超人', id: 1 },
  { name: '黑色寡妇', id: 2 },
  { name: '红色钢铁侠', id: 3 },
  { name: '孙悟空', id: 4 },
  { name: '绿巨人', id: 5 },
  { name: '城管队长', id: 6 },
  { name: '奥特曼', id: 7 },
  { name: '蒙多ZYP', id: 8 }
];
@Component({
  selector: 'app-root',
  //   template: `<h1>{{title}}</h1><h2>{{hero.name}} details!
  //  <input [(ngModel)]="hero.name" placeholder="name">
  //   </h2>`, //使用template 和 templateUrl是根据其所在位置来确定使用哪一个模版
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '基佬联盟';
  selecteHero: Hero = Heroes[0];
  heroes = Heroes;
  /**
   * 设置当前Hero
   * @param id hero Id
   */
  setHero(id: number) {
    this.selecteHero = Heroes.filter(h => h.id === id)[0] || Heroes[0];
  }

}
