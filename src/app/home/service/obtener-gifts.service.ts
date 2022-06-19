import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ObtenerGiftsService {

  private apiKey = environment.apiKey;
  private api = environment.api;

  constructor(private  _http:HttpClient) { }

  traerGisft(palabra:string){
    return this._http.get(`${this.api}search?q=${palabra}&api_key=${this.apiKey}&limit=10`)
  }
  traerGisftGuardado(id:any){
    return this._http.get(`${this.api}${id}?api_key=${ this.apiKey}`)
  }


}
