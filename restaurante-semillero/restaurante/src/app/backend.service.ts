import { Injectable, Type } from '@angular/core';
import { Producto } from './Producto';

const PRODUCTOS = [
  new Producto('Pizza', 10000, 'Pizza Hawaiana', 'pizza.jpg'),
  new Producto('Haburguesa', 15000, 'Hamburguesa doble carne', 'hamburguesa.jpg'),
  new Producto('Coca-cola', 5000, 'Coca-cola zero', 'coca_cola.jpg'),
];

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Producto) {
      // TODO: get from the database
      return Promise.resolve<Producto[]>(PRODUCTOS);
    }
    const err = new Error('Cannot get object of this type');    
    throw err;
  }
}
