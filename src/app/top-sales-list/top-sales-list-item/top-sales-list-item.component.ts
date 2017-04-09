import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-sales-list-item',
  templateUrl: './top-sales-list-item.component.html',
  styleUrls: ['./top-sales-list-item.component.scss']
})
export class TopSalesListItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
