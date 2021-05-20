let nextId = 1;

export class Producto {
  id: number;
  constructor(
    public nombre: string,
    public precio: number,
    public descripcion: string,
    public imagen: string) {
      this.id = nextId++;
    }
}