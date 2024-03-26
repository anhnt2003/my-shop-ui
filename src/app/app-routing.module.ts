import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        loadChildren: () => 
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => 
       import('./modules/auth/auth.module').then(m => m.AuthModule)    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
