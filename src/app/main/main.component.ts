import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.restoreNav();
  }
  
  restoreNav(): void {
    var selected = document.getElementById("navGames");
    selected = <HTMLElement> selected.nextElementSibling;
    console.log(selected.id);
    if (selected.id == "gameTitleNav") {
      selected.parentNode.removeChild(selected);
    }
  }
}