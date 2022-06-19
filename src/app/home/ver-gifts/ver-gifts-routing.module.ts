import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerGiftsComponent } from './ver-gifts.component';

const routes: Routes = [
  {
    path:'',
    component:VerGiftsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerGiftsRoutingModule { }
