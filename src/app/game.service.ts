import { Injectable } from '@angular/core';

import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {

  constructor() { }
  
  getGames(): Game[] {
    return GAMES;
  }
  getGame(id: string): Game[] {
    var array = GAMES;
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i].id === id) {
        array = array.slice(i, i+1);
        return array;
      }
    }
  }
}
