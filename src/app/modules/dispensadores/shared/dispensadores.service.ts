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
  public menuToggle = this.menuToggleData.asObservable();

  private currentPageData = new BehaviorSubject<number>(1);
  public currentPage = this.currentPageData.asObservable();

  private tableInfoData = new BehaviorSubject<Info>({ count: 0, pages: 0, prev: '', next: '' });
  public tableInfo = this.tableInfoData.asObservable();

  constructor() { }

  toggleMenu(){
    this.menuToggleData.next(!this.menuToggleData.value);
  }

  setTableInfo(info: Info){
    this.tableInfoData.next(info);
  }

  setCurrentPage(page: number){
    this.currentPageData.next(page);
  }
}
