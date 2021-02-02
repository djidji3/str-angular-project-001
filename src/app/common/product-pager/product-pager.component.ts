import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  /* bemenet-amivel etetem a gyerek componens */
  @Input() products: Product[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
