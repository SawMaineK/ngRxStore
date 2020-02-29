import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) { 
    this.heroes$ = heroService.entities$;
    this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes$);
  }
 
  add(hero: Hero) {
    this.heroService.add(hero);
  }
 
  delete(hero: Hero) {
    this.heroService.delete(hero.id);
  }
 
  getHeroes() {
    this.heroService.getAll();
  }
 
  update(hero: Hero) {
    this.heroService.update(hero);
  }

}
