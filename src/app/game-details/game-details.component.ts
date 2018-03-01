import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameDetailsComponent implements OnInit {
  game: Game[];
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.getGame();
    this.appendNav();
  }
  getGame(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getGame(id);
  }
  goBack(): void {
    this.location.back();
  }
  appendNav(): void {
    //prepare new list item for navbar
    var li = document.createElement("li");
    li.setAttribute("class", "nav-item");
    li.setAttribute("data-toggle", "collapse");
    li.setAttribute("data-target", ".navbar-collapse.show");
    li.setAttribute("id", "gameTitleNav")
    
    //prepare new anchor tag inside new list item
    var a = document.createElement("a");
    var title = this.game[0].title;
    a.setAttribute("class", "nav-link navButton active");
    a.setAttribute("_ngcontent-c0", "");
    var attr = document.createAttribute("routerLink");
    attr.value = "/games/" + this.game[0].id;
    a.setAttributeNode(attr);
    a.setAttribute("routerLinkActive", "active");
    a.innerHTML = title;
    
    //add anchor tag to new list item
    li.appendChild(a);
    
    //clear active class on previous select and set it for new one
    document.getElementById("navGames").className = "nav-item";
    document.getElementById("navGames").firstElementChild.setAttribute("class", "nav-link navButton");
    document.getElementById("navGames").parentNode.insertBefore(li, document.getElementById("navGames").nextSibling);
  }
}
