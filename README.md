# RestauranteSemilleroHBT2021

## Este repositrio se creo para el semillero de HBT JAva - Angular 2021!

El semillero esta orientado a implementar un BAckend con Spring Boot (Microservicios) y un FrontEnd con Angular.

La arquitectra propuesta para la solucion se encuentra en la imagen:

![alt text](https://github.com/danneradib/RestauranteSemilleroHBT2021/blob/main/Restaurante_Semillero_2021.jpg)

El documento de historias de usuario se adjunta en el reporitorio: link(Historias Usuario - Restaurante El Semillero.xls)

El diagrama Entidad Relación para el modalo de seguridad:

![alt text](https://github.com/danneradib/RestauranteSemilleroHBT2021/blob/main/DiagramaER.png)

```
SEMILLERO.postman_collection
```
## Ejercicio Clase 11
- Se crea la clase **Producto.ts** que define el objeto con sus atributos
- Se crea un servicio llamado **backend.service.ts** el cual nos permite inicializar un arreglo de objetos de la clase Producto y tener un metodo que según el tipo, pueden haber por ejemplo arreglos de Insumos, y devuelve ese arreglo segun se requiera.
- Se crea un segundo servicio llamado **producto.service** dicho servicio tiene una variable de productos que es un arreglo de Producto la cual se inicializa desde la funcion getProductos haciendo el llamado al backend.servicie y obtener el arreglo por el tipo indicado
- Se crea el componente listar-productos el cual utiliza el servicio de producto.service para hacer el llamado a la función y obtener los productos para ser mostrados en una tabla en el html
- En este archivo se crea la función borrarProducto que tras confirmación elimina el producto del arreglo y renderiza nuevamente las filas cambiando de estado una variable para mostrar un mensaje.
