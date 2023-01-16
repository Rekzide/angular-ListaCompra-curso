import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../modules/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() textoBoton: string;
  @Output() productoSeleccionado : EventEmitter<number>;

  constructor() {
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
    this.textoBoton = 'Comprar';
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick(indice: number) {
    this.productoSeleccionado.emit(indice);
  }

}
