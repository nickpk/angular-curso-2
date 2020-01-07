import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopageFoundComponent } from './shared/nopage-found/nopage-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    { path:'' , 
      component:PagesComponent ,
      children: [
        { path:'dashboard' , component:DashboardComponent },
        { path:'progress' , component:ProgressComponent },
        { path:'graficas1' , component:Grafica1Component },
        { path:'' , redirectTo:'dashboard',pathMatch:'full' }
      ]
    },
    { path:'login' , component:LoginComponent },
    { path:'register' , component:RegisterComponent },
    { path:'' , redirectTo:'/dashboard',pathMatch:'full' },
    { path:'**' , component:NopageFoundComponent },
]

export const APP_ROUTES = RouterModule.forRoot( appRoutes , {useHash:true});