import { Component } from '@angular/core';
import { Heroes } from './heroes.component';

@Component({
    selector: 'dashboard-hero',
    template: `
<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <a *ngFor="let hero of heroes"   class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </a>
</div>

    `,
    styleUrls:['./dashboard.component.css']
})

export class DashBoardComponent {
    title = 'Top Heroes';
    heroes = Heroes.HEROES.slice(0, 4);
}