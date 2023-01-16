import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../../modules/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoProducto: Producto;
  @Output() productoCreado: EventEmitter<Producto>;


  constructor() {
    this.nuevoProducto = new Producto();
    this.productoCreado = new EventEmitter();
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick() {
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Producto();
  }



}
