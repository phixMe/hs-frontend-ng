import {Component, OnInit} from '@angular/core';
import {TopSalesService} from '../top-sales.service';

@Component({
  selector: 'app-top-sales-list',
  templateUrl: './top-sales-list.component.html',
  styleUrls: ['./top-sales-list.component.scss']
})
export class TopSalesListComponent implements OnInit {
  sales: any[];
  constructor(private tss: TopSalesService) {
    this.sales = tss.getTopSales(tss.getStores(), 10);
  }

  ngOnInit() {
  }

}
