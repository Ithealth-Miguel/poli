import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarGiftsComponent } from './buscar-gifts.component';

const routes: Routes = [
  {
    path:'',
    component:BuscarGiftsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarGiftsRoutingModule { }
