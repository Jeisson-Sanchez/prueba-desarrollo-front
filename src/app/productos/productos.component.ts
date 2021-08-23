import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  allProduct: Producto[] = [];

  constructor(private productoService: ProductoService) { 
    this.productos();
  }

  ngOnInit(): void {
  }

  productos(){
    this.productoService.productos()
    .subscribe(data => {
      this.allProduct = data
    });
  }

  activarProducto(id: any){

    this.productoService.activarProducto(id)
    .subscribe((data) => {
      alert(data)
      this.productos();
    });
  }

}
