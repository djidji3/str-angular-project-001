import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    /* kiemelt termekek valtozoja  - elso 5 termek*/
    featuredProduct: Product[] = this.productService.getFeatured(true)
    .slice(0, 4); 

    /* akcios termekek valtozoja  - elso 5 termek*/
    saleProduct: Product[] = this.productService.getSaleProducts(true)
    .slice(0, 4); 

    /* cat1 termekek valtozoja  - elso 5 termek*/
    cat1Product: Product[] = this.productService.getCat1Products(true)
    .slice(0, 4); 

    /* cat1 termekek valtozoja  - elso 5 termek*/
    cat2Product: Product[] = this.productService.getCat1Products(true)
    .slice(0, 4); 

    /* DI hogy elerjem a product.service-t */
    constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

}
