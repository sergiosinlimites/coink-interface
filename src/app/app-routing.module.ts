import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/entrance/entrance.module').then(m => m.EntranceModule)
  },
  {
    path: 'dispensadores',
    loadChildren: () => import('./modules/dispensadores/dispensadores.module').then(m => m.DispensadoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
