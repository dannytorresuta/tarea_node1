var db = require('./dboperations');
var Alumno = require('./alumno');
var Cliente = require('./clientes');
var curso = require('./cursos');
var estudiante = require('./estudiantes');

const operaciones = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dboperations = require('./dboperations');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})


async function obtenerAlumnos(request,response){
    var resultado = await dboperations.getAlumnos();
    response.send(resultado);    
 }
app.get('/alumno', obtenerAlumnos)

async function obtenerClientes(request,response){
    var resultado = await dboperations.getClientes();
    response.send(resultado);    
 }
 app.get('/clientes', obtenerClientes)

 async function obtenerCursos(request,response){
    var resultado = await dboperations.getCursos();
    response.send(resultado);    
 }
 app.get('/cursos', obtenerCursos)

 async function obtenerEstudiantes(request,response){
    var resultado = await dboperations.getEstudiantes();
    response.send(resultado);    
 }
 app.get('/estudiantes', obtenerEstudiantes)

/*
async function obtenerPersonas(request,response){
    var resultado = await operaciones.getPersonas();
    response.send(resultado);    
 }
app.get('/obtenerPersonas', obtenerPersonas)
*/
var puerto = process.env.PORT || 8090;
app.listen(puerto);
console.log(' La API esta corriendo en el puerto: '+puerto);