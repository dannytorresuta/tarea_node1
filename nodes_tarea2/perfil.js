const config = require("./dbconfig")

class Perfil{
    constructor(id,Nombre,email,pass,numerotlf,mensaje){
        this.id=id;
        this.Nombre=Nombre;
        this.email=email;
        this.pass= pass;
        this.numerotlf=numerotlf;
        this.mensaje=mensaje;
    }
}

module.exports = Perfil;