import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/components/list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'home', component: ListComponent} // incluir componente de home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
