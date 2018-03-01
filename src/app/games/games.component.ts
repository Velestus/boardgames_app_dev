import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GamesComponent implements OnInit {

  games: Game[];
  
  constructor(private gameService: GameService) { }
  
  ngOnInit() {
    this.getGames();
    this.restoreNav();
  }
  getGames(): void {
    this.games = this.gameService.getGames();
    this.games.sort(function(a,b) {
      var titleFirst = a.title.toLowerCase();
      var titleSecond = b.title.toLowerCase();
      if (titleFirst.localeCompare(titleSecond) < 0) return -1;
      else if (titleFirst.localeCompare(titleSecond) > 0) return 1;
      else return 0;
    });
  }
  restoreNav(): void {
    var selected = document.getElementById("navGames");
    selected = <HTMLElement> selected.nextElementSibling;
    if (selected.id == "gameTitleNav") {
      selected.parentNode.removeChild(selected);
      document.getElementById("navGames").firstElementChild.setAttribute("class", "nav-link navButton active");
    }
  }
  
}
