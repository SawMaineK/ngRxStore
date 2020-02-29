import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: 'heroes', component:HerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
