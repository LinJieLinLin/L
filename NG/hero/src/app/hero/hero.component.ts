import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes = HEROES;
  constructor() { }
  selectedHero: any = this.heroes[0];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
  }
}
