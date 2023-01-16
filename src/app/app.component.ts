import { Component } from '@angular/core';
import { Producto } from './modules/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosSeleccionado: Producto[];
  productosComprados: Producto[];

  constructor() {
    this.productosSeleccionado = [];
    this.productosComprados = [];
  }

  onProductoCreado($event: any) {
    console.log($event);
    this.productosSeleccionado.push($event);
  }

  onProductoSeleccionado($event: any){
    const prod = this.productosSeleccionado.splice($event, 1);
    this.productosComprados.push(prod[0]);
  }
  onProductoNoSeleccionado($event: any) {
    const prod = this.productosComprados.splice($event, 1);
    this.productosSeleccionado.push(prod[0]);
  }

}
