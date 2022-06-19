import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscarGiftsComponent } from '../buscar-gifts/buscar-gifts.component'

import { BuscarGiftsRoutingModule } from './buscar-gifts-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [BuscarGiftsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarGiftsRoutingModule,
  ]
})
export class BuscarGiftsModule { }
