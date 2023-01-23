import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    HttpService
  ],
  exports: [
    MatIconModule,
    MatTableModule
  ]
})
export class SharedModule { }
