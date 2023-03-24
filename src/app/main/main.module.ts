import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
