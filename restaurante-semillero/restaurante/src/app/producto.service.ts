import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  constructor(private backend: BackendService) { }

  getProductos() {
    this.backend.getAll(Producto).then( (productos: Producto[]) => {    
      this.productos.push(...productos);
    });
    return this.productos;
  }
}
