import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDispensadoresComponent } from './menu-dispensadores/menu-dispensadores.component';
import { HeaderDispensadoresComponent } from './header-dispensadores/header-dispensadores.component';
import { RouterModule, Routes } from '@angular/router';
import { DispensadoresComponent } from './dispensadores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DispensadoresService } from './shared/dispensadores.service';
import { PaginatorDispensadoresComponent } from './paginator-dispensadores/paginator-dispensadores.component';

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
    DispensadoresComponent,
    PaginatorDispensadoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DispensadoresService
  ]
})
export class DispensadoresModule { }
