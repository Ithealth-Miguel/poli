import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { BuscarGiftsComponent } from './buscar-gifts/buscar-gifts.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'buscar',
    loadChildren:()=>import('./buscar-gifts/buscar-gifts-routing.module').then(m=>m.BuscarGiftsRoutingModule)
  },
  {
    path: 'vergift',
    loadChildren:()=>import('../home/ver-gifts/ver-gifts.module').then(m=>m.VerGiftsModule)
  },
  {
    path: 'buscarStiker',
    loadChildren:()=>import('../home/buscar-stikers/buscar-stikers.module').then(m=>m.BuscarStikersModule)
  },
  // {
  //   path:'',
  //   redirectTo:''
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
