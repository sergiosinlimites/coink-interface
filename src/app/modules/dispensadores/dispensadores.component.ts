import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { HttpService } from 'src/app/shared/services/http.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dispensadores',
  templateUrl: './dispensadores.component.html',
  styleUrls: ['./dispensadores.component.scss']
})
export class DispensadoresComponent implements OnInit {

  dataSource!: MatTableDataSource<Character>;
  displayedColumns = ['id', 'name', 'status', 'species', 'type', 'gender'];

  constructor (
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.httpService.get<Character[]>('character').subscribe(response => {
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
}
