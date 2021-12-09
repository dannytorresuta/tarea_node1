import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()


export class DashboardService {


    private ventas: Venta[] = [
        {
            nombre: "Elite admin",
            estado: "EN VENTA",
            fecha: "Abril 18, 2021",
            precio: "$24",
            color_precio: "text-success",
           
        },
        {
            nombre: "Real Homes WP Theme",
            estado: "EXTENDIDO",
            fecha: "Abril 19, 2020",
            precio: "$1250",
            color_precio: "text-info" ,
           
        },
        {
            nombre: "Ample Admin",
            estado: "EXTENDED",
            fecha: "Abril 19, 2021",
            precio: "$1250",
            color_precio: "text-info" ,
        },
        {
            nombre: "Medical Pro WP Theme",
            estado: "IMPUESTO",
            fecha: "Abril 20, 2021",
            precio: "$-24",
            color_precio: "text-danger" ,
        },
        {
            nombre: "Hosting press html",
            estado: "EN VENTA",
            fecha: "Abril 21, 2021",
            precio: "$24",
            color_precio: "text-success" ,
        },
        {
            nombre: "Digital Agency PSD",
            estado: "EN VENTA",
            fecha: "Abril 23, 2021",
            precio: "$-14",
            color_precio: "text-danger",
        },
        {
            nombre: "Helping Hands WP Theme",
            estado: "MIEMBRO",
            fecha: "Abril 22, 2021",
            precio: "$64",
            color_precio: "text-success" ,
        }
    ];

    
      private comentarios: Comentario[] =[
         {
          foto:'../../assets/plugins/images/users/varun.jpg',
          nombre:"James Anderson",
          comentario_user:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos. ",
          estado: "Pendiente",
          fecha: "Abril 14, 2021",
          color_estado: "bg-primary",
         },
         {
          foto:"../../assets/plugins/images/users/genu.jpg",
          nombre:"Michael Jorden",
          comentario_user:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos. ",
          estado: "Aprobado",
          fecha: "Abril 14, 2021",
          color_estado: "bg-success",
         },
         {
          foto:"../../assets/plugins/images/users/ritesh.jpg",
          nombre:"Johnathan Doeting",
          comentario_user:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos. ",
          estado: "Rechazado",
          fecha: "Abril 14, 2021",
          color_estado: "bg-danger",
         }

      ];  

    private chat: Chat_Listing[] = [
         {
             foto: "../../assets/plugins/images/users/varun.jpg" ,
             nombre: "Varun Dhavan",
             estado:"En linea",
            color_estado: "text-success",
          
          },
          {
             foto: "../../assets/plugins/images/users/genu.jpg" ,
             nombre: "Genelia Deshmukh",
             estado: "Ausente",
             color_estado: "text-warning",
          
          },
          {
             foto: "../../assets/plugins/images/users/ritesh.jpg",
             nombre: "Ritesh Deshmukh" ,
             estado: "Ocupado",
             color_estado: "text-danger",
         
          },
        {
           foto: "../../assets/plugins/images/users/arijit.jpg",
            nombre: "Arijit Sinh",
             estado: "Desconectado",
           color_estado: "text-muted",
         
         },
         {
             foto: "../../assets/plugins/images/users/govinda.jpg" ,
             nombre: "Govinda Star",
            estado: "En linea",
             color_estado: "text-success",
       
         },
          {
             foto: "../../assets/plugins/images/users/hritik.jpg",
             nombre: "John Abraham" ,
            estado: "En linea",
             color_estado: "text-success",
      
          },
      ];

    constructor(private http: HttpClient){
        console.log("Servicio Dashboard listo para usarse...")
    
    }
    getVentas(): Venta[]{
        return this.ventas;

    }

    //  getComentario(): Comentario[]{
    //      return this.comentarios;
    //  }

      getChat_Listing(): Chat_Listing[]{
          return this.chat;
      }

     
     getAlumnos(){
        return this.http.get('http://localhost:8090/alumno');
      }

    getComentario(){
        return this.http.get('http://localhost:8090/comentario');
    }

    getTablero(){
        return this.http.get('http://localhost:8090/tablero')
    }
    
    getChat(){
        return this.http.get('http://localhost:8090/chat')
    }
}



export interface Venta{
    nombre: string;
    estado: string;
    fecha: string;
    precio: string;
    color_precio: string;
};

 export interface Comentario{
     foto: string;
     nombre: string;
     comentario_user: string;
     estado: string;
     fecha: string;
     color_estado: string;
 }

  export interface Chat_Listing{
     foto: string
     nombre: string;
    estado: string;
    color_estado: string;
 }