import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'app', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [appGuard]
  }, { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, { 
    path: '**', 
    redirectTo: 'app', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
