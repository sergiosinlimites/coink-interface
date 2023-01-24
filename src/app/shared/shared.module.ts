import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
