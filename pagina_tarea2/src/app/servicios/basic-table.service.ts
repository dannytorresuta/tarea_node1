import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BasicTableService{

    
    private datos: Dato[]=[
        {
        nombre: "Deshmukh",
        apellido: "Prohaska",
        usuario: "@Genelia",
        rol: "admin",},

        {
        nombre: "Deshmukh",
        apellido: "Gaylord",
        usuario: "@Ritesh",
        rol: "member",
        },
        {
        nombre: "Sanghani",
        apellido: "Gusikowski",
        usuario: "@Govinda",
        rol: "developer",
        },
        {
        nombre: "Roshan",
        apellido: "Rogahn",
        usuario: "@Hritik",
        rol: "supporter",
        },
        {
        nombre: "Joshi",
        apellido: "Hickle",
        usuario: "@Maruti",
        rol: "member",
        },
        {
        nombre: "Nigam",
        apellido: "Eichmann",
        usuario: "@Sonu",
        rol: "supporter",
        }
    ];

    constructor(private http:HttpClient){

    }
    getBasicTable(){
        return this.http.get('http://localhost:8090/basictable')
    }
    getDatos(): Dato[]{
        return this.datos;
    }
}
export interface Dato{
    nombre: string;
    apellido: string;
    usuario: string;
    rol: string;
}