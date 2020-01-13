import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ComponentModule } from '../components/components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
    ],
    imports:[
        SharedModule,
        ComponentModule,
        PAGES_ROUTES,
        ChartsModule
    ]
})

export class PagesModule{}