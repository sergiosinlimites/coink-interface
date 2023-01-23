import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDispensadoresComponent } from './menu-dispensadores/menu-dispensadores.component';
import { HeaderDispensadoresComponent } from './header-dispensadores/header-dispensadores.component';
import { RouterModule, Routes } from '@angular/router';
import { DispensadoresComponent } from './dispensadores.component';

const routes: Routes = [
  {
    path: '',
    component: DispensadoresComponent
  }
]

@NgModule({
  declarations: [
    MenuDispensadoresComponent,
    HeaderDispensadoresComponent,
    DispensadoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DispensadoresModule { }
