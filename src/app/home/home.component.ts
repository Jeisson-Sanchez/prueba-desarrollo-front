import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { 
    this.inventario();
  }

  inventario(){
    this.productoService.inventario()
    .subscribe(data => {
      this.productos = data;
    });
  }

  ngOnInit(): void {
  }

}
