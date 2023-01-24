import { Component, OnInit, OnDestroy } from '@angular/core';
import { DispensadoresService } from '../shared/dispensadores.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-menu-dispensadores',
  templateUrl: './menu-dispensadores.component.html',
  styleUrls: ['./menu-dispensadores.component.scss']
})
export class MenuDispensadoresComponent implements OnInit, OnDestroy {

  /** Gets the current state of the toggle menu */
  public menuActive: boolean = false;

  /** Subscription */
  private menuToggleData: Subscription = new Subscription;

  constructor(
    private dispensadoresService: DispensadoresService
  ){}

  ngOnInit(): void {
    this.menuToggleData = this.dispensadoresService.menuToggle.subscribe(menu => this.menuActive = menu);
  }

  ngOnDestroy(): void {
    this.menuToggleData.unsubscribe();
  }

}
