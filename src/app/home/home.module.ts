import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BuscarGiftsModule } from './buscar-gifts/buscar-gifts.module';
import { VerGiftsModule } from './ver-gifts/ver-gifts.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HomePageRoutingModule,
    BuscarGiftsModule,
    VerGiftsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
