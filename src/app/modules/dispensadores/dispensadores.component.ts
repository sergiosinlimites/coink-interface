import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { HttpService } from 'src/app/shared/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { DispensadoresService, Info } from './shared/dispensadores.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dispensadores',
  templateUrl: './dispensadores.component.html',
  styleUrls: ['./dispensadores.component.scss']
})
export class DispensadoresComponent implements OnInit {
  /** To collect the data in the table */
  dataSource!: MatTableDataSource<Character>;
  /** The names list of the displayed column for the mat-table */
  displayedColumns = ['id', 'name', 'status', 'species', 'type', 'gender'];
  /** The current page */
  currentPage: number = 1;
  /** The list of characters  */
  data: Character[] = [];
  /** The info provided by the API (not the data) */
  info!: Info;
  /** The filters' form */
  form: FormGroup<{ nombre: FormControl<string | null>; tipoPersonaje: FormControl<string | null>; }>;
  /** Filter variable */
  nombre: string | undefined;
  /** Filter variable */
  tipo: string | undefined
  /** Gets the current state of the toggle menu */
  activeMenu: boolean = false;

  constructor (
    private httpService: HttpService,
    private dispensadoresService: DispensadoresService
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      tipoPersonaje: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.subscribeToService();
    this.fetchData({ page: this.currentPage });
  }

  /**
   * Manages the subscriptions
   */
  subscribeToService(){
    this.dispensadoresService.tableInfo.subscribe(info => {
      this.info = info;
    });
    this.dispensadoresService.currentPage.subscribe(page => {
      this.currentPage = page;
      this.fetchData({ page: this.currentPage, name: this.nombre, type: this.tipo });
    });
    this.dispensadoresService.menuToggle.subscribe(togg => this.activeMenu = togg);
  }

  /**
   * Gets the params that the API requires and gets the data
   * @param searchParams the list of useful query params
   */
  fetchData(searchParams: { page?: string | number, name?: string, type?: string }): void {
    const search = Object.entries(searchParams)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    this.httpService.get<Character[]>(`character/?${search}`).subscribe(response => {
      this.data = response.results;
      this.dispensadoresService.setTableInfo(response.info);
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  /**
   * Clean the current filters
   */
  cleanFilters(): void {
    this.nombre = undefined;
    this.tipo = undefined;
    this.form.reset();
    this.fetchData({ page: this.currentPage, name: this.nombre, type: this.tipo });
  }

  /**
   * Search in the API from the values passed in the filter inputs
   */
  searchCharacters(): void {
    this.nombre = this.form.get('nombre')?.value || undefined;
    this.tipo = this.form.get('tipoPersonaje')?.value || undefined;
    this.fetchData({ page: this.currentPage, name: this.nombre, type: this.tipo });
  }
}
