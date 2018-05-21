import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
//   styleUrls: ['./app.hero-list.component.css'],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
  
    constructor(private service: HeroService) { }
  
    ngOnInit() {
      this.heroes = this.service.getHeroes();
    }
  
    selectHero(hero: Hero) { this.selectedHero = hero; }
  }