const config = require("./dbconfig")

class Tablero{
    constructor(id,Nombre,estado,fecha, precio){
        this.id=id;
        this.nombre=nombre;
        this.fecha = fecha;
        this.estado = estado;
        this.precio = precio;
    }
}

module.exports = Tablero;