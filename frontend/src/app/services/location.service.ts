import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getRegiones() {
    return this.http.get(`${environment.API_URL}regiones`); 
  }

  getComunas(codigo:string) {
    return this.http.get(`${environment.API_URL}regiones/${codigo}/comunas`);
  }
}
