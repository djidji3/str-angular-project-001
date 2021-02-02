import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
cat1Products : Product[] = this.productService.getCat1Products(true)
  .slice(0, 5);

/* DI hogy elerjem a product.service-t */
constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

}


