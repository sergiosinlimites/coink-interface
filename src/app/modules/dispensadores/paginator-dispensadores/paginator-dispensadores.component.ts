import { Component, OnDestroy, OnInit } from '@angular/core';
import { DispensadoresService, Info } from '../shared/dispensadores.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-paginator-dispensadores',
  templateUrl: './paginator-dispensadores.component.html',
  styleUrls: ['./paginator-dispensadores.component.scss']
})
export class PaginatorDispensadoresComponent implements OnInit, OnDestroy {

  public currentPage: number = 1;
  public shownPages: number[] = [];
  public info!: Info;
  public totalPages: number = 0;
  public totalPagesArray: number[] = [];
  public count: number = 0;

  private tableData: Subscription = new Subscription;
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

  getPages(length: number){
    this.totalPagesArray = Array.from(Array(length).keys()).map( (i) => i+1 );
    if(this.currentPage < length - 4){
      const arrayFound = this.totalPagesArray.slice(this.currentPage-1, this.currentPage+4);
      this.shownPages = arrayFound;
    }
  }

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
