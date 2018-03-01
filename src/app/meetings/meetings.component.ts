import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingsComponent implements OnInit {
  
  meetings: Meeting[];
  
  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.getMeetings();
    this.restoreNav();
  }
  getMeetings(): void {
    this.meetings = this.meetingService.getMeetings();
    this.meetings.sort(function(a,b) {
      var titleFirst = a.date.toLowerCase();
      var titleSecond = b.date.toLowerCase();
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
      document.getElementById("navMeetings").firstElementChild.setAttribute("class", "nav-link navButton active");
    }
  }
  
}
