const config = require("./dbconfig")

class curso{
    constructor(curso_id,codigo,nombre,descripcion,horas,estudiante_id){
        this.curso_id=curso_id;
        this.codigo=codigo;
        this.nombre=nombre;
        this.descripcion= descripcion;
        this.horas=horas;
        this.estudiante_id=estudiante_id;
    }
}

module.exports = curso;