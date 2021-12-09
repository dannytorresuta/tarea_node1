//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var Alumno = require('./alumno');
var Cliente = require('./clientes');
var curso = require('./cursos');
var estudiante = require('./estudiantes');
var Perfil = require('./perfil');
var Comentario = require('./comentario');
var Tablero = require('./tablero');
var chat=require('./chat');
var basic=require('./basictable');

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

async function getPerfil(){
    try{
        let pool = await sql.connect(config);
        let perfiles = await pool.request().query("select * from perfil");
        return perfiles.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getComentario(){
    try{
        let pool = await sql.connect(config);
        let comentarios = await pool.request().query("select * from comentarios");
        return comentarios.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getTablero(){
    try{
        let pool = await sql.connect(config);
        let tableros = await pool.request().query("select * from tablero");
        return tableros.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getChat(){
    try{
        let pool = await sql.connect(config);
        let chats = await pool.request().query("select * from listchat");
        return chats.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getBasicTable(){
    try{
        let pool = await sql.connect(config);
        let basic = await pool.request().query("select * from usuarios");
        return basic.recordsets;
    }catch(error){
        console.log(error);
    }
}


module.exports={
    getAlumnos : getAlumnos, 
    getClientes: getClientes, 
    getCursos: getCursos, 
    getEstudiantes: getEstudiantes,
    getPerfil: getPerfil,
    getComentario: getComentario,
    getTablero: getTablero,
getChat: getChat,
getBasicTable: getBasicTable
   // getPersonas: getPersonas  
}
