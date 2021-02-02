import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = 
  [
{"id":1000,"catId":1, "name":"ASpondley","description":"A termek leiras","image":"img1","price":8122,"salePrice": 7234,"stock":"s-457","featured":true,"active":true},
{"id":1001,"catId":1, "name":"BSpondley","description":"B termek leiras","image":"img1","price":8222,"salePrice": 7134,"stock":"s-457","featured":true,"active":true},
{"id":1002,"catId":1, "name":"NSpondley","description":"N termek leiras","image":"img1","price":8322,"salePrice": 7234,"stock":"s-457","featured":false,"active":true},
{"id":1003,"catId":1, "name":"MSpondley","description":"M termek leiras","image":"img1","price":0,"salePrice": 7334,"stock":"s-457","featured":true,"active":true},
{"id":1004,"catId":1, "name":"SLpondley","description":"G termek leiras","image":"img1","price":8522,"salePrice": 7434,"stock":"s-457","featured":true,"active":true},
{"id":1005,"catId":2, "name":"JSpondley","description":"R termek leiras","image":"img1","price":0,"salePrice": 7534,"stock":"s-757","featured":true,"active":true},
{"id":1006,"catId":2, "name":"HSpondley","description":"Z termek leiras","image":"img1","price":8722,"salePrice": 7634,"stock":"s-657","featured":false,"active":true},
{"id":1007,"catId":2, "name":"GSpondley","description":"W termek leiras","image":"img1","price":8822,"salePrice": 7734,"stock":"s-557","featured":false,"active":true},
{"id":1008,"catId":2, "name":"FSpondley","description":"Q termek leiras","image":"img1","price":0,"salePrice": 7834,"stock":"s-457","featured":true,"active":true},
]

  constructor() { }

/* metodus ami visszaadja a kiemelt termekeket, opcionalisan ossze is keveri*/
  getFeatured(randomized?: boolean): Product[]{
    const kiemelt = this.list.filter( item => item.featured );
    return randomized ? this.randomize(kiemelt) :  kiemelt;
  }

  /* metodus ami visszaadja az akcios (salePrise !=0) termekeket */
  getSaleProducts(randomized?: boolean): Product[]{
    return this.list.filter( item => item.salePrice != 0 );
  }

  /* metodus ami visszaadja az 1.kategoria (catId ==1) termekeket */
  getCat1Products(randomized?: boolean): Product[]{
    return this.list.filter( item => item.catId == 1 );
  }
  
  /* metodus ami visszaadja az 1.kategoria (catId ==1) termekeket */
  getCat2Products(randomized?: boolean): Product[]{
    return this.list.filter( item => item.catId == 2 );
  }

  /* metodus tomb elemeinek veletlen visszaadasa */
  randomize(rendezettTomb: any[] ): any[] {
    return rendezettTomb.sort( elem => Math.random() - 0.5);
  }
}
