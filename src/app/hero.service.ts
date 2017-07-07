import { Injectable } from '@angular/core';
import { HEROES } from "./mock-datas/mock-heroes";
import { Hero } from "./hero"
@Injectable() //当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  };

}
