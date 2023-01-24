import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Info {
  count: number;
  pages: number;
  prev: string;
  next: string;
}

@Injectable({
  providedIn: 'root'
})
export class DispensadoresService {
  private menuToggleData = new BehaviorSubject<boolean>(false);
  /** Observable of the toggle state */
  public menuToggle = this.menuToggleData.asObservable();

  private currentPageData = new BehaviorSubject<number>(1);
  /** Observable of the current page */
  public currentPage = this.currentPageData.asObservable();

  private tableInfoData = new BehaviorSubject<Info>({ count: 0, pages: 0, prev: '', next: '' });
  /** Observable of the info from the API */
  public tableInfo = this.tableInfoData.asObservable();

  constructor() { }

  /** Changes the state of the toggle menu */
  toggleMenu(){
    this.menuToggleData.next(!this.menuToggleData.value);
  }

  /** Changes the state of the info from the API */
  setTableInfo(info: Info){
    this.tableInfoData.next(info);
  }

  /** Changes the current page number */
  setCurrentPage(page: number){
    this.currentPageData.next(page);
  }
}
