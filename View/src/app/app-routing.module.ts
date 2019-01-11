import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ManyListsViewComponent } from './many-lists-view/many-lists-view.component';

const routes: Routes = [
  { path: 'list/:id', component: ListViewComponent },
  { path: 'lists', component:ManyListsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
