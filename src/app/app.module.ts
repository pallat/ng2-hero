import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './yod.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DashBoardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: DashBoardComponent},
      {path: 'heroes', component: HeroComponent}
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
