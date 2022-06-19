import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ObtenerGiftsService } from '../service/obtener-gifts.service';

@Component({
  selector: 'app-buscar-gifts',
  templateUrl: './buscar-gifts.component.html',
  styleUrls: ['./buscar-gifts.component.scss'],
})
export class BuscarGiftsComponent implements OnInit {

  gifts:any[]=[];

  giftsGuardado:any[]=[];

  constructor(private obtenerGiftsService:ObtenerGiftsService,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('ids')){
      this.giftsGuardado = JSON.parse(localStorage.getItem('ids'));
    }else{
      localStorage.setItem('ids',JSON.stringify(this.giftsGuardado));
    }
  }

  navigate(){
    this.router.navigateByUrl(`home`)
  }

  async presentAlertMultipleButtons(id:any) {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '¿Desea guardar el gift?',
      buttons: [
        {
          text: 'No,Gracias',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');

          }
        }, {
          text: 'Si, gracias',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.giftsGuardado.push(id)
            localStorage.setItem('ids',JSON.stringify(this.giftsGuardado));
          }
        }
      ]
    });

    await alert.present();
  }

  buscarGif(palabra:any){
    palabra = palabra.toLowerCase();
    if(palabra === '' || palabra === null){
      return
    }
    this.obtenerGiftsService.traerGisft(palabra)
        .subscribe((resp:any) =>{
          console.log(resp);
          
          this.gifts = resp.data;
        })
  }

}
