import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes'; 

//Servicios
import { DashboardService } from './servicios/dashboard.service';
import{ BasicTableService } from './servicios/basic-table.service';
import { ProfileService } from './servicios/profile.service';

//Componentes
import { AppComponent } from './app.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    BlankComponent,
    DashboardComponent,
    FontawesomeComponent,
    MapGoogleComponent,
    ProfileComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    DashboardService,
    BasicTableService,
    ProfileService
  
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
