import { Component, OnInit } from '@angular/core';
import { Compra } from '../interfaces/Compra';
import { Producto } from '../interfaces/Producto';
import { CompraService } from '../services/compra.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  productos: Producto[] = [];
  product: Producto = {
    id: "",
    producto: "",
    cantidad: "",
    numero_lote: "",
    fecha_vencimiento: "",
    precio: ""
  };
  oneproducto: any;
  compra: Compra = {
    nombre_cliente: "",
    id_producto: "",
    cantidad: "",
    precio_total: 0,
  };
  buttonCompra: boolean = false;

  constructor(private productoService: ProductoService, private compraService: CompraService) { 
    this.inventario();
  }

  inventario(){
    this.productoService.inventario()
    .subscribe(data => {
      this.productos = data;
    });
  }

  producto(id: any){
    this.buttonCompra = true
    this.productoService.producto(id)
    .subscribe((data) => {
      this.oneproducto = data;
        this.product = {
          id: this.oneproducto[0].id,
          producto: this.oneproducto[0].producto,
          cantidad: this.oneproducto[0].cantidad,
          numero_lote: this.oneproducto[0].numero_lote,
          fecha_vencimiento: this.oneproducto[0].fecha_vencimiento,
          precio: this.oneproducto[0].precio
        };
        this.compra.id_producto = this.oneproducto[0].id;
    });
  }

  netoPagar(){
    if(this.compra.nombre_cliente == "" || this.compra.cantidad == "") alert("Debe llenar todos los campos")
    var valor1 = parseInt(this.compra.cantidad);
    var valor2 = parseInt(this.product.precio); 
    this.compra.precio_total = valor1 * valor2;
    console.log(this.compra.precio_total)
  }

  comprar(){
    this.netoPagar();
    console.log(this.compra)
    this.compraService.registrarCompra(this.compra)
    .subscribe((data) => {
      console.log(data);
      alert(data)
      location.reload();
    }, (error) => {
      alert(error)
    });
  }

  ngOnInit(): void {
  }

}
