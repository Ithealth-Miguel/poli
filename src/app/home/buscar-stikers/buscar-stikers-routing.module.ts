import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarStikersComponent } from './buscar-stikers.component';

const routes: Routes = [
  {
    path:'',
    component:BuscarStikersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarStikersRoutingModule { }
