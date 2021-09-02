import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes.config';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.competitions,
    pathMatch: 'full'
  },
  {
    path: ROUTES.competitions,
    loadChildren: () => import('./competitions/competitions.module').then( m => m.CompetitionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
