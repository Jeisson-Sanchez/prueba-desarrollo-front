
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  productos(){
    const path = this.API_ENDPOINT + '/producto';
    return this.http.get<Producto[]>(path);
  }

  inventario(){
    const path = this.API_ENDPOINT + '/inventario';
    return this.http.get<Producto[]>(path);
  }

  crearProducto(producto: Producto){
    const path = this.API_ENDPOINT + '/producto';
    return this.http.post(path, producto);
  }

  producto(id: string){
    const path = this.API_ENDPOINT + '/producto/' + id;
    return this.http.get<Producto>(path);
  }

  actualizarProducto(producto: Producto){
    const path = this.API_ENDPOINT + '/producto/' + producto.id;
    return this.http.put(path, producto);
  }

  activarProducto(id: string){
    const path = this.API_ENDPOINT + '/activarProducto/' + id;
    return this.http.get(path);
  }
}
