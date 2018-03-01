import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(
    private myElement: ElementRef,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.router.events.subscribe(function(evt) {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  goToTop(): void {
    let element = this.myElement.nativeElement.querySelector("nav");
    element.scrollIntoView({behavior: "smooth"});
  }
  
  scrollFunction(): void {
      let y = $(window).scrollTop();
      if ( y > 200 ) {
        $("#topButton").fadeIn(500, "swing");
      } else {
        $("#topButton").fadeOut(500, "swing");
      }
    }
  
  onScroll(event) {
    $(window).scroll(this.scrollFunction());
  }
  
  
}
