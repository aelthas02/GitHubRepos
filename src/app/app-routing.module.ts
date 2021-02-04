import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/components/list/list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'home', component: HomeComponent},
  { path: '*', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
