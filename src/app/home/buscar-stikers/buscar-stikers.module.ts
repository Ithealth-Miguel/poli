import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarStikersRoutingModule } from './buscar-stikers-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuscarStikersComponent } from './buscar-stikers.component';


@NgModule({
  declarations: [BuscarStikersComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarStikersRoutingModule
  ]
})
export class BuscarStikersModule { }
