import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Producto = {
    id: "",
    producto: "",
    cantidad: "",
    numero_lote: "",
    fecha_vencimiento: "",
    precio: ""
  };
  id: any;
  editar: boolean = false;
  oneproducto: any;

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    this.validateEdit();

  }

  crearProducto(){
    console.log(this.product)
    this.productoService.crearProducto(this.product)
    .subscribe((data) => {
      console.log(data);
      alert(data)
      location.reload();
    }, (error) => {
      alert("Debe llenar todos los campos")
    });
  }

  actualizarProducto(){
    console.log(this.product)
    this.productoService.actualizarProducto(this.product)
    .subscribe((data) => {
      console.log(data);
      alert(data)
    }, (error) => {
      alert("Debe llenar todos los campos")
    });
  }

  validateEdit(){
    if (this.id){
      this.editar = true;

      this.productoService.producto(this.id)
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
      }, (error) => {
        console.log(error)
      });
    }
  }

  ngOnInit(): void {
  }

}
