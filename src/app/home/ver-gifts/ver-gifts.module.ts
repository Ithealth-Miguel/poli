import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerGiftsRoutingModule } from './ver-gifts-routing.module';
import { VerGiftsComponent } from './ver-gifts.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [VerGiftsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerGiftsRoutingModule
  ]
})
export class VerGiftsModule { }
