import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DispensadoresService {

  private menuToggleData = new BehaviorSubject<boolean>(false);
  public menuToggle = this.menuToggleData.asObservable();

  constructor() { }

  toggleMenu(){
    this.menuToggleData.next(!this.menuToggleData.value);
  }
}
