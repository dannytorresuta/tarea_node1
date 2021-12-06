//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var Alumno = require('./alumno');
var Cliente = require('./clientes');
var curso = require('./cursos');
var estudiante = require('./estudiantes');

async function getAlumnos(){
    try{
        let pool = await sql.connect(config);
        let alumnos = await pool.request().query("select * from alumnos");
        return alumnos.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getClientes(){
    try{
        let pool = await sql.connect(config);
        let cliente = await pool.request().query("select * from clientes2");
        return cliente.recordset;
    }catch(error){
        console.log(error);
    }
}
async function getCursos(){
    try{
        let pool = await sql.connect(config);
        let cursos = await pool.request().query("select * from cursos");
        return cursos.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getEstudiantes(){
    try{
        let pool = await sql.connect(config);
        let cursos = await pool.request().query("select * from estudiantes");
        return cursos.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getAlumnos : getAlumnos, 
    getClientes: getClientes, 
    getCursos: getCursos, 
getEstudiantes: getEstudiantes
   // getPersonas: getPersonas  
}
