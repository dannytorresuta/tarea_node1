const config = require("./dbconfig")

class estudiante{
    constructor(estudiante_id,nombre,apellido,anio_ingreso,email){
        this.estudiante_id=estudiante_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.anio_ingreso = anio_ingreso;
        this.email=email;
    }
}

module.exports = estudiante;