import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { GameDetailsComponent } from './game-details/game-details.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { GameService } from './game.service';
import { MeetingService } from './meeting.service';
import { GameWorkshopComponent } from './game-workshop/game-workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    GamesComponent,
    ContactComponent,
    MeetingsComponent,
    GameDetailsComponent,
    GameWorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService, MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
