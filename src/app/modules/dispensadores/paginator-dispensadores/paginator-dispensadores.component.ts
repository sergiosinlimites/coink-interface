import { Component, OnDestroy, OnInit } from '@angular/core';
import { DispensadoresService, Info } from '../shared/dispensadores.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-paginator-dispensadores',
  templateUrl: './paginator-dispensadores.component.html',
  styleUrls: ['./paginator-dispensadores.component.scss']
})
export class PaginatorDispensadoresComponent implements OnInit, OnDestroy {

  /** Keeps the current page */
  public currentPage: number = 1;
  /** The list of pages that are being shown */
  public shownPages: number[] = [];
  /** Contains the info from response of the API (not the data) */
  public info!: Info;
  /** The number of total pages */
  public totalPages: number = 0;
  /** The list of all the pages */
  public totalPagesArray: number[] = [];
  /** The count of elements in the data provided by API */
  public count: number = 0;

  /** Subscriptions */
  private tableData: Subscription = new Subscription;
  /** Subscriptions */
  private currentPageData: Subscription = new Subscription;

  constructor(
    private dispensadoresService: DispensadoresService
  ){
  }

  ngOnInit(): void {
    this.tableData = this.dispensadoresService.tableInfo.subscribe(info => {
      this.info = info;
      this.totalPages = info.pages;
      this.count = info.count;
      this.getPages(this.totalPages);
    });
    this.currentPageData = this.dispensadoresService.currentPage.subscribe(page => {
      this.currentPage = page;
    })
  }

  /**
   * Get the list of close pages based on the current page
   * @param length The length of the pages array
   */
  getPages(length: number){
    this.totalPagesArray = Array.from(Array(length).keys()).map( (i) => i+1 );
    if(this.currentPage < length - 4){
      const arrayFound = this.totalPagesArray.slice(this.currentPage-1, this.currentPage+4);
      this.shownPages = arrayFound;
    }
  }

  /**
   * Manages the changing of the page
   * @param {'prev' | 'next'} type wheter it is to go forward or backward
   */
  changePage(type: 'prev' | 'next'){
    if (type === 'prev' && this.currentPage > 1) {
      this.currentPage--;
      this.dispensadoresService.setCurrentPage(this.currentPage);
    } else if (type === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
      this.dispensadoresService.setCurrentPage(this.currentPage);
    }
  }

  ngOnDestroy(): void {
    this.tableData.unsubscribe();
    this.currentPageData.unsubscribe();
  }

}
