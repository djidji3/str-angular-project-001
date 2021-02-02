import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

    cat2Featured : Product[] = this.productService.getCat2Featured(true)
    .slice(0, 4);

  catProducts : Product[] = this.productService.getCat2Products(true);


/* DI hogy elerjem a product.service-t */
constructor(private productService: ProductService){}



  ngOnInit(): void {
  }

}
