const config = require("./dbconfig")

class Basictable{
    constructor(id_usuario, nombre, apellido, usuario, roles){
        this.id_usuario=id_usuario;
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.roles=roles;
    }
    
}

module.export = Basictable;