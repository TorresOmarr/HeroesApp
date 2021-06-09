import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }

  heroes: Heroe[] = [];


  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( respHeroes => {
        this.heroes = respHeroes;
      })
  }

}
