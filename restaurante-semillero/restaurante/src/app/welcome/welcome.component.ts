import { Component, OnInit } from '@angular/core';
import { Producto } from '../structuras';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component'

const ELEMENT_DATA: Producto[] = [];

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  

  constructor() { }


  ngOnInit(): void {
  }

}
