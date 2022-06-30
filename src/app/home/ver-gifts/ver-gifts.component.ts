import { AfterViewInit, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subject, Subscription } from 'rxjs';
import { ObtenerGiftsService } from '../service/obtener-gifts.service';
import { ObtenerStikersService } from '../service/obtener-stiker.service';

@Component({
  selector: 'app-ver-gifts',
  templateUrl: './ver-gifts.component.html',
  styleUrls: ['./ver-gifts.component.scss'],
})
export class VerGiftsComponent implements OnInit,AfterViewInit,OnDestroy {

  giftsGuardado:any[]=[];
  stikerGuardado:any[]=[];
  gifts:any[]=[];
  stikers:any[]=[];

  verGift:boolean=false;
  verStikers:boolean=false;

  public subscriber: Subscription;

  constructor(private router: Router,
              private obtenerGiftsService:ObtenerGiftsService,
              private obtenerStikersService:ObtenerStikersService,
              private alertController: AlertController,) { }
  ngOnDestroy(): void {
    
  }
  ngAfterViewInit(): void {
    this.datosGift();
    this.datosStiker()
  }

  ngOnInit() {
    this.subscriber = this.router.events
      .subscribe((event) => {
          if(event['url'] === '/home/vergift'){
            this.datosGift();
            this.datosStiker()
          }
    });
  }
  
  navigate(){
    this.router.navigateByUrl(`home`)
  }

  navegarGaleria(num:number){
    this.verGift = false;
    this.verStikers = false
    switch (num) {
      case 1:
        this.verGift = true;
        break;
      case 2:
        this.verStikers = true
        break;
    
      default:
        break;
    }
  }

  datosGift(){
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
  datosStiker(){
    if(localStorage.getItem('idsStiker')){
      this.stikerGuardado = JSON.parse(localStorage.getItem('idsStiker'));
      this.stikerGuardado.forEach(resp =>{
        this.obtenerStikersService.traerStikersGuardado(resp)
        .subscribe((resp:any) =>{
          console.log(resp);
          
          if(!this.stikers.includes(resp.data.images.downsized.url)){
            this.stikers.push(resp.data.images.downsized.url);
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
