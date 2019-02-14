import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ManyListsViewComponent } from './many-lists-view/many-lists-view.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'list/:id', component: ListViewComponent },
  { path: 'lists', component:ManyListsViewComponent},
  { path: 'calendar', component:CalendarComponent},
  { path:"**", redirectTo: 'lists'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
