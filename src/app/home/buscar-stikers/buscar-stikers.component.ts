import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ObtenerStikersService } from '../service/obtener-stiker.service';

@Component({
  selector: 'app-buscar-stikers',
  templateUrl: './buscar-stikers.component.html',
  styleUrls: ['./buscar-stikers.component.scss'],
})
export class BuscarStikersComponent implements OnInit {
  stikers:any[]=[];

  stikersGuardado:any[]=[];

  constructor(private obtenerStikersService:ObtenerStikersService,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('idsStiker')){
      this.stikersGuardado = JSON.parse(localStorage.getItem('idsStiker'));
    }else{
      localStorage.setItem('idsStiker',JSON.stringify(this.stikersGuardado));
    }
  }

  navigate(){
    this.router.navigateByUrl(`home`)
  }

  async presentAlertMultipleButtons(id:any) {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '¿Desea guardar el stiker?',
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
            this.stikersGuardado.push(id)
            localStorage.setItem('idsStiker',JSON.stringify(this.stikersGuardado));
          }
        }
      ]
    });

    await alert.present();
  }

  buscarStikers(palabra:any){
    palabra = palabra.toLowerCase();
    if(palabra === '' || palabra === null){
      return
    }
    this.obtenerStikersService.traerStikers(palabra)
        .subscribe((resp:any) =>{
          console.log(resp);
          
          this.stikers = resp.data;
        })
  }

}
