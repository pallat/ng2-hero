import { Component } from '@angular/core';
import { Hero } from './hero.component';
import { Heroes } from './heroes.component';
import { NgForm } from '@angular/forms';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './yod.component.html',
    styleUrls: ['./yod.component.css']
})

export class HeroComponent {
    heroService;
    title = 'Pallat\'s App';
    heroes;
    selectedHero = new Hero();
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    constructor(heroService: HeroService) {
        this.heroService = heroService;
        this.heroes = this.heroService.getHeroes();
    }

    registerUser(form: NgForm) {
        this.heroService.addHero({id: this.heroes.length + 11 , name: form.value.name })
    }
}
