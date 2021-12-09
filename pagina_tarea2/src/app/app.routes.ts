import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { DashboardComponent} from './dashboard/dashboard.component';
import { ProfileComponent } from  './profile/profile.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component'
import { Error404Component } from './error404/error404.component'
import { MapGoogleComponent } from './map-google/map-google.component'



const APP_ROUTES: Routes = [
    { path:'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path:'basic-table', component:  BasicTableComponent },
    { path: 'blank', component: BlankComponent },
    { path:'fontawesome', component: FontawesomeComponent },
    { path: 'map-google', component: MapGoogleComponent },
    { path: 'error404', component: Error404Component },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
    
];

/*
@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})
*/
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
