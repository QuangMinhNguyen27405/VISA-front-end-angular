import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SportLeaderBoardComponent } from './sport-leader-board/sport-leader-board.component';
import { TallyTipComponent } from './tally-tip/tally-tip.component';
import { ContactComponent } from './contact/contact.component';

// Define routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'sport-leader-board', component: SportLeaderBoardComponent },
  { path: 'tally-tip', component: TallyTipComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
