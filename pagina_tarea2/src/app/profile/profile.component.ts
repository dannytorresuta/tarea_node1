import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../servicios/profile.service';
console.log("Por aqui paso");

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listaProfile: any[] = [];
  
  constructor(private profileServicio: ProfileService ) {
    
    this.profileServicio.getProfile().subscribe((data:any) => {
      this.listaProfile = data;
      
      console.log("data: ", data['Nombre']);

    } )
   }

   
  ngOnInit(): void {
  }

}
