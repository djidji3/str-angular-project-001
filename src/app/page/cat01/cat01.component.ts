import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  cat1Featured : Product[] = this.productService.getCat1Featured(true)
  .slice(0, 4);

  catProducts : Product[] = this.productService.getCat1Products(true);


/* DI hogy elerjem a product.service-t */
constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

}


