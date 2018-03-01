import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.restoreNav();
  }
  restoreNav(): void {
    var selected = document.getElementById("navGames");
    selected = <HTMLElement> selected.nextElementSibling;
    if (selected.id == "gameTitleNav") {
      selected.parentNode.removeChild(selected);
      document.getElementById("navAbout").firstElementChild.setAttribute("class", "nav-link navButton active");
    }
  }

}
