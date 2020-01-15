import {Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {  
        path:'' , 
        component:PagesComponent ,
        children: [
        { data:{description:'Esta es la pagina de Dashboard', titulo:"Dashboard"}, path:'dashboard' , component:DashboardComponent },
        { data:{description:'Esta es la pagina de Progress', titulo:"Progress"}, path:'progress' , component:ProgressComponent },
        { data:{description:'Esta es la pagina de Graficas', titulo:"Graficas"}, path:'graficas1' , component:Grafica1Component },
        { data:{description:'Esta es la pagina de Promesas', titulo:"Promesas"}, path:'promesas' , component:PromesasComponent },   
        { data:{description:'Esta es la pagina de Ajustes del tema', titulo:"Ajustes del tema"}, path:'account-setting' , component:AccountSettingsComponent },
        { data:{description:'Esta es la pagina de RXJS', titulo:"RXJS"}, path:'rxjs' , component:RxjsComponent },
        { path:'' , redirectTo:'dashboard',pathMatch:'full' }
        ]
    },
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes ); 