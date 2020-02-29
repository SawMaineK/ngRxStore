import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // this.service.add({id:1,name:"ag ag",saying:"helllo"});
    // console.log(this.service.entities$);
    this.service.entities$.subscribe(x=>console.log(x));
  }
  title = 'Data';
  constructor(private service:HeroService){}


}
