import { Injectable } from '@angular/core';
import { Hero } from './hero.component';
import { Heroes } from './heroes.component';

@Injectable()
export class HeroService {
    heroes =Heroes.HEROES;
    getHeroes(): Hero[] {
        return this.heroes;
    }
    addHero(hero: Hero) {
        this.heroes.push(hero);
    }
}