import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { GamesComponent } from '../games/games.component';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { MeetingsComponent } from '../meetings/meetings.component';
import { ContactComponent } from '../contact/contact.component';
import { GameWorkshopComponent } from '../game-workshop/game-workshop.component';

    
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'games/:id/workshop', component: GameWorkshopComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }