import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.restoreNav();
  }
  
  restoreNav(): void {
    var selected = document.getElementById("navGames");
    selected = <HTMLElement> selected.nextElementSibling;
    if (selected.id == "gameTitleNav") {
      selected.parentNode.removeChild(selected);
      document.getElementById("navContact").firstElementChild.setAttribute("class", "nav-link navButton active");
    }
  }
}
