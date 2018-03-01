import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-workshop',
  templateUrl: './game-workshop.component.html',
  styleUrls: ['./game-workshop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameWorkshopComponent implements OnInit {
  game: Game[];
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.findGame();
  }
  findGame(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getGame(id);
  }
  goDetails(): void {
    this.location.back();
  }
}
