const config = require("./dbconfig")

class Cliente{
    constructor(id, nombre, apellido, sueldo){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }
    
}

module.export = Cliente;