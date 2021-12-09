import { Component, OnInit } from '@angular/core';

import{BasicTableService,Dato} from '../servicios/basic-table.service';
@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  datos: Dato[]=[];
  listaBasic: any[]=[];
  constructor(private _basictableService: BasicTableService) {
    _basictableService.getBasicTable().subscribe( (data:any) => {
      this.listaBasic = data
      console.log(data);
    })
    this.datos = _basictableService.getDatos();
  
  }

  ngOnInit(): void {
  }

}
