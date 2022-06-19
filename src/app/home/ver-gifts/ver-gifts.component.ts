import { AfterViewInit, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subject, Subscription } from 'rxjs';
import { ObtenerGiftsService } from '../service/obtener-gifts.service';

@Component({
  selector: 'app-ver-gifts',
  templateUrl: './ver-gifts.component.html',
  styleUrls: ['./ver-gifts.component.scss'],
})
export class VerGiftsComponent implements OnInit,AfterViewInit,OnDestroy {

  giftsGuardado:any[]=[];
  gifts:any[]=[];

  public subscriber: Subscription;

  constructor(private router: Router,
              private obtenerGiftsService:ObtenerGiftsService,
              private alertController: AlertController,) { }
  ngOnDestroy(): void {
    
  }
  ngAfterViewInit(): void {
    this.datos();
  }

  ngOnInit() {
    this.subscriber = this.router.events
      .subscribe((event) => {
          if(event['url'] === '/home/vergift'){
            this.datos();
          }
    });
  }
  
  navigate(){
    this.router.navigateByUrl(`home`)
  
  }

  datos(){
    if(localStorage.getItem('ids')){
      this.giftsGuardado = JSON.parse(localStorage.getItem('ids'));
      this.giftsGuardado.forEach(resp =>{
        this.obtenerGiftsService.traerGisftGuardado(resp)
        .subscribe((resp:any) =>{
          if(!this.gifts.includes(resp.data.images.downsized.url)){
            this.gifts.push(resp.data.images.downsized.url);
          }
        })
      })
    }

  }

  async eliminar(ele:any,index:any) {
    const alert = await this.alertController.create({
      mode:'ios',
      message: '¿Desea guardar eliminar el gift?',
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
            this.giftsGuardado.splice(index,1)
            this.gifts.splice(index,1)    
        
            localStorage.setItem('ids',JSON.stringify(this.giftsGuardado));
          }
        }
      ]
    });

    await alert.present();
  }
}
