# Solución prueba técnica

Pueden visualizar está aplicación ejecutando en la siguiente [URL](http://konecta-test.s3-website.us-east-2.amazonaws.com/).

## Qué se usó

- React JS
- Javascript
- Sass
- LocalStorage
- Material UI

## Como ejecutar el proyecto en un servidor Local

En la carpeta donde se clonó el proyecto, puedes ejecutar:

### `npm install`

Instala las dependencias del proyecto

### `npm start`

Inicia la aplicación en modo desarrollo
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu buscador.

### `npm run build`

Genera los archivos estáticos para llevarlos a un servidor

## ConsultaS SQL

SQL es un tema desconocido para mi, pero para dar respuesta a estos dos puntos de consultas, hice un curso básico de SQL y se crearon las siguientes tablas en un editor SQL online:

CREATE TABLE products (
    id INTEGER,
    name VARCHAR(200),
    price DOUBLE
);

CREATE TABLE detalleVentas (
    id INTEGER,
  	idVenta Integer,
    idProducto INTEGER,
    cantidad DOUBLE
);

CREATE TABLE ventas (
    id INTEGER,
    customerName VARCHAR(200),
    totalPagado DOUBLE
);

Así, pude darle respuesta a cada una de las preguntas por medio de una consulta SQL que quedaron de la siguiente manera:

### `1. Realizar una consulta que permita conocer cuál es el producto que más stock tiene.`

SELECT *, MAX(id)  as 'Stock' FROM products;

### `2. Realizar una consulta que permita conocer cuál es el producto más vendido.`

SELECT TOP 1 p.name, SUM(dv.cantidad) AS CantVendido 
FROM products p
INNER JOIN detalleVentas dv ON dv.idProducto = p.id
GROUP BY p.name
ORDER BY CantVendido DESC;

