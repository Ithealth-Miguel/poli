import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ObtenerStikersService {

  private apiKey = environment.apiKey;
  private api = environment.api;

  constructor(private  _http:HttpClient) { }

  traerStikers(palabra:string){
    return this._http.get(`${this.api}stickers/search?q=${palabra}&api_key=${this.apiKey}&limit=10`)
  }
  traerStikersGuardado(id:any){
    return this._http.get(`${this.api}content/${id}?api_key=${ this.apiKey}`)
  }


}
