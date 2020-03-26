import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTimerComponent } from './show-timer/show-timer.component';

const routes: Routes = [
  {
    path: 'timer', component: ShowTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
