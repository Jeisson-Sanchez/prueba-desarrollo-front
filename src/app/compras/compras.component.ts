import { Component, OnInit } from '@angular/core';
import { Compra } from '../interfaces/Compra';
import { CompraService } from '../services/compra.service';
// import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  comprasAll: Compra[] = [];

  constructor(private compraService: CompraService) {
    this.compras();
  }

  compras(){
    this.compraService.compras()
    .subscribe(data => {
      this.comprasAll = data;
    });
  }

  factura(id: any){
    // console.log(id)
    this.compraService.factura(id)
    .subscribe(data => {
      // const pdf = new jsPDF();
      // pdf.fromHTML(data, 10, 10);
      // pdf.save();

      console.log("descarga hecha")
    });
  }

  ngOnInit(): void {
  }

}
