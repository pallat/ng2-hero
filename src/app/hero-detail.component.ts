import { Component, Input } from '@angular/core';
import { Hero } from './hero.component';

@Component({
    selector: 'hero-detail',
    template: `<div>
    <label>name: </label>
        <input value="{{selectedHero.name}}" placeholder="name">
    </div>`
})

export class HeroDetailComponent {
    @Input()
    selectedHero: Hero;
}