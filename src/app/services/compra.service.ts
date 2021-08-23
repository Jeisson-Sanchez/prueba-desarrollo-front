import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../interfaces/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  compras(){
    const path = this.API_ENDPOINT + '/compra';
    return this.http.get<Compra[]>(path);
  }

  registrarCompra(compra: Compra){
    const path = this.API_ENDPOINT + '/compra';
    return this.http.post(path, compra);
  }

  factura(id: string){
    const path = this.API_ENDPOINT + '/factura/' + id;
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(path);
    // return this.http.get(path, {headers, responseType: 'blob' as 'json'});
  }
}
