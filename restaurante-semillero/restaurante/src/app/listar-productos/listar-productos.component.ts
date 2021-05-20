import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
  providers: [ProductoService]
})
export class ListarProductosComponent implements OnInit {
  mostrarMensaje: boolean = false;
  columnas: string[] = ['id', 'nombre', 'precio', 'borrar'];
  productos!: Producto[];

  @ViewChild(MatTable)
  tabla1!: MatTable<Producto>;

  constructor(private service: ProductoService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.productos = this.service.getProductos();
    console.log(this.productos);
  }

  borrarProducto(id: number) {
    if (confirm("Realmente quiere borrar este producto?")) {
      this.productos.splice(id, 1);
      this.tabla1.renderRows();
      this.mostrarMensaje = true;
    }
    else
    {
      this.mostrarMensaje = false;
    }
  }

}
