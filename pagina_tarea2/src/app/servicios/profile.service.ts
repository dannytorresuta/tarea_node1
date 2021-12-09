import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
    console.log('Perfil listo', );

  }
  getProfile(){
    return this.http.get('http://localhost:8090/perfil');
  }
}


