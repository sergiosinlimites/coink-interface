import { Component, OnInit } from '@angular/core';
import { DispensadoresService } from '../shared/dispensadores.service';

@Component({
  selector: 'app-header-dispensadores',
  templateUrl: './header-dispensadores.component.html',
  styleUrls: ['./header-dispensadores.component.scss']
})
export class HeaderDispensadoresComponent implements OnInit {

  /** Gets the current state of the toggle menu */
  public menuActive: boolean = false;

  constructor(
    private dispensadoresService: DispensadoresService
  ){}

  ngOnInit(){
    this.dispensadoresService.menuToggle.subscribe(menu => this.menuActive = menu)
  }

  /** Modifies the state of the toggle menu */
  toggleMenu(){
    this.dispensadoresService.toggleMenu();
  }

}
