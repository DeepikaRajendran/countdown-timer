import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTimerComponent } from './show-timer/show-timer.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'timer', component: ShowTimerComponent
  },
  {
    path: 'event/:id', component: EventComponent
  },
  {
    path: 'events', component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
