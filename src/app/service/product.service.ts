import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] =
  [{ "id": 1, "catId": 200, "name": "Dahlbom", "description": "Mosciski-West", "image": "1", "price": 9613, "salePrice": 4568, "stock": "Becton, Dickinson and Company", "featured": true, "active": true },
    { "id": 2, "catId":200, "name": "Jeanneau", "description": "Sporer-Mitchell", "image": "2", "price": 9614, "salePrice": 4569, "stock": "DENTSPLY SIRONA Inc.", "featured": false, "active": false },
    { "id": 3, "catId":200, "name": "Fadell", "description": "Mante-Jakubowski", "image": "3", "price": 9615, "salePrice": 4570, "stock": "AveXis, Inc.", "featured": false, "active": true },
    { "id": 4, "catId":200, "name": "Elnough", "description": "Bahringer Inc", "image": "4", "price": 9616, "salePrice": 4571, "stock": "National Research Corporation", "featured": false, "active": false },
    { "id": 5, "catId":200, "name": "Putman", "description": "Towne, Trantow and O'Reilly", "image": "5", "price": 9617, "salePrice": 4572, "stock": "Solar Capital Ltd.", "featured": true, "active": false },
    { "id": 6, "catId":200, "name": "Bram", "description": "Robel Inc", "image": "6", "price": 9618, "salePrice": 4573, "stock": "PowerShares Nasdaq Internet Portfolio", "featured": false, "active": true },
    { "id": 7, "catId":200, "name": "Bradtke", "description": "Bogan, Crist and Boyle", "image": "7", "price": 9619, "salePrice": 4574, "stock": "TCW Strategic Income Fund, Inc.", "featured": true, "active": false },
    { "id": 8, "catId":200, "name": "Bird", "description": "Cormier LLC", "image": "8", "price": 9620, "salePrice": 4575, "stock": "Wintrust Financial Corporation", "featured": false, "active": false },
    { "id": 9, "catId":200, "name": "Rodge", "description": "Gaylord-Kuphal", "image": "9", "price": 9621, "salePrice": 4576, "stock": "Anworth Mortgage Asset  Corporation", "featured": true, "active": true },
    { "id": 10, "catId": 100, "name": "Milroy", "description": "Legros-Rempel", "image": "10", "price": 9622, "salePrice": 4577, "stock": "Gentex Corporation", "featured": true, "active": false },
    { "id": 11, "catId": 100, "name": "Enrique", "description": "Jakubowski-Zulauf", "image": "11", "price": 9623, "salePrice": 4578, "stock": "Capital City Bank Group", "featured": true, "active": false },
    { "id": 12, "catId": 100, "name": "Rigler", "description": "Wintheiser, Schimmel and Carter", "image": "12", "price": 9624, "salePrice": 4579, "stock": "Harley-Davidson, Inc.", "featured": false, "active": false },
    { "id": 13, "catId": 100, "name": "McKnish", "description": "Boyer, Powlowski and Ward", "image": "13", "price": 9625, "salePrice": 4580, "stock": "Valley National Bancorp", "featured": false, "active": false },
    { "id": 14, "catId": 100, "name": "Poter", "description": "Ritchie, Mayert and Stokes", "image": "14", "price": 9626, "salePrice": 4581, "stock": "CMS Energy Corporation", "featured": true, "active": false },
    { "id": 15, "catId": 100, "name": "Songer", "description": "Zieme-Gusikowski", "image": "15", "price": 9627, "salePrice": 4582, "stock": "Perrigo Company", "featured": false, "active": true },
    { "id": 16, "catId": 100, "name": "Arling", "description": "Stark, Rogahn and Cassin", "image": "16", "price": 9628, "salePrice": 4583, "stock": "iShares 20+ Year Treasury Bond ETF", "featured": false, "active": false },
    { "id": 17, "catId": 100, "name": "Southern", "description": "Reichel-Harvey", "image": "17", "price": 9629, "salePrice": 4584, "stock": "Comp En De Mn Cemig ADS", "featured": true, "active": false },
    { "id": 18, "catId": 100, "name": "Twigge", "description": "Gutmann-Lesch", "image": "18", "price": 9630, "salePrice": 4585, "stock": "VictoryShares US Small Cap Volatility Wtd ETF", "featured": true, "active": false },
    { "id": 19, "catId": 100, "name": "Grishelyov", "description": "DuBuque Group", "image": "19", "price": 9631, "salePrice": 4586, "stock": "Gores Holdings II, Inc.", "featured": false, "active": true },
    { "id": 20, "catId": 100, "name": "Maliffe", "description": "Swift-Mayer", "image": "20", "price": 9632, "salePrice": 4587, "stock": "Clearwater Paper Corporation", "featured": false, "active": false },
    { "id": 21, "catId": 200, "name": "Vondruska", "description": "Jacobs-Price", "image": "21", "price": 9633, "salePrice": 4588, "stock": "Prudential Public Limited Company", "featured": false, "active": false },
    { "id": 22, "catId": 200, "name": "Sherred", "description": "Stokes, Gutmann and Roberts", "image": "22", "price": 9634, "salePrice": 4589, "stock": "USA Truck, Inc.", "featured": false, "active": true },
    { "id": 23, "catId": 100, "name": "Gorthy", "description": "Bruen Group", "image": "23", "price": 9635, "salePrice": 4590, "stock": "Unifirst Corporation", "featured": false, "active": true },
    { "id": 24, "catId": 100, "name": "Plumridge", "description": "Morar-Rau", "image": "24", "price": 9636, "salePrice": 4591, "stock": "Geo Group Inc (The)", "featured": true, "active": true },
    { "id": 25, "catId": 100, "name": "Poundford", "description": "Kertzmann-VonRueden", "image": "25", "price": 9637, "salePrice": 4592, "stock": "Elbit Imaging Ltd.", "featured": false, "active": true },
    { "id": 26, "catId": 100, "name": "Campes", "description": "Botsford, Ebert and Kirlin", "image": "26", "price": 9638, "salePrice": 4593, "stock": "Ebix, Inc.", "featured": true, "active": false },
    { "id": 27, "catId": 100, "name": "Deverell", "description": "Dickens-Osinski", "image": "27", "price": 9639, "salePrice": 4594, "stock": "MB Financial Inc.", "featured": false, "active": false },
    { "id": 28, "catId": 200, "name": "Franiak", "description": "Flatley, Deckow and Kunde", "image": "27", "price": 9640, "salePrice": 4595, "stock": "City Office REIT, Inc.", "featured": false, "active": false },
    { "id": 29, "catId": 100, "name": "Kidsley", "description": "Kertzmann Inc", "image": "29", "price": 9641, "salePrice": 4596, "stock": "PGT Innovations, Inc.", "featured": false, "active": true },
    { "id": 30, "catId": 100, "name": "Burchill", "description": "Goldner, Dare and Beatty", "image": "30", "price": 9642, "salePrice": 4597, "stock": "Monro Muffler Brake, Inc.", "featured": false, "active": true },
    { "id": 31, "catId": 200, "name": "Ghest", "description": "Waters and Sons", "image": "31", "price": 9643, "salePrice": 4598, "stock": "Central Europe, Russia and Turkey Fund, Inc. (The)", "featured": false, "active": false },
    { "id": 32, "catId": 100, "name": "Stanlake", "description": "Rau, Rice and Fahey", "image": "32", "price": 9644, "salePrice": 4599, "stock": "DMC Global Inc.", "featured": false, "active": true },
    { "id": 33, "catId": 100, "name": "Wem", "description": "Steuber-Bogan", "image": "33", "price": 9645, "salePrice": 4600, "stock": "Grupo Aeroportuario Del Pacifico, S.A. de C.V.", "featured": false, "active": true },
    { "id": 34, "catId": 100, "name": "Cureton", "description": "Buckridge-Goodwin", "image": "34", "price": 9646, "salePrice": 4601, "stock": "Universal Health Services, Inc.", "featured": false, "active": true },
    { "id": 35, "catId": 100, "name": "Lett", "description": "O'Connell and Sons", "image": "35", "price": 9647, "salePrice": 4602, "stock": "Eiger BioPharmaceuticals, Inc.", "featured": false, "active": true },
    { "id": 36, "catId": 200, "name": "Phillis", "description": "Satterfield, Stanton and McClure", "image": "36", "price": 9648, "salePrice": 4603, "stock": "Athene Holding Ltd.", "featured": true, "active": false },
    { "id": 37, "catId": 100, "name": "Cassely", "description": "Cummerata Group", "image": "37", "price": 9649, "salePrice": 4604, "stock": "Public Storage", "featured": false, "active": false },
    { "id": 38, "catId": 100, "name": "Baish", "description": "Daniel-Cartwright", "image": "38","price": 9650, "salePrice": 4605, "stock": "UMH Properties, Inc.", "featured": false, "active": true },
    { "id": 39, "catId": 100, "name": "Grigolli", "description": "Steuber Group", "image": "39", "price": 9651, "salePrice": 4606, "stock": "Nuveen Select Maturities Municipal Fund", "featured": false, "active": false },
    { "id": 40, "catId": 100, "name": "Cuttell", "description": "Heller and Sons", "image": "40", "price": 9652, "salePrice": 4607, "stock": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.", "featured": false, "active": false },
    { "id": 41, "catId": 100, "name": "Stailey", "description": "Wiegand Inc", "image": "41", "price": 9653, "salePrice": 4608, "stock": "PowerShares Optimum Yield Diversified Commodity Strategy No K-", "featured": true, "active": true },
    { "id": 42, "catId": 200, "name": "Robinson", "description": "Becker Inc", "image": "42", "price": 9654, "salePrice": 4609, "stock": "LPL Financial Holdings Inc.", "featured": true, "active": true },
    { "id": 43, "catId": 200, "name": "Fudge", "description": "Fisher Inc", "image": "43", "price": 9655, "salePrice": 4610, "stock": "United Technologies Corporation", "featured": false, "active": false },
    { "id": 44, "catId": 200, "name": "Meo", "description": "Nikolaus-DuBuque", "image": "44", "price": 9656, "salePrice": 4611, "stock": "Associated Capital Group, Inc.", "featured": true, "active": true },
    { "id": 45, "catId": 200, "name": "Clunie", "description": "McClure and Sons", "image": "45", "price": 9657, "salePrice": 4612, "stock": "Tuttle Tactical Management Multi-Strategy Income ETF", "featured": true, "active": false },
    { "id": 46, "catId": 100, "name": "Heeley", "description": "Hegmann, Dooley and Boehm", "image": "46", "price": 9658, "salePrice": 4613, "stock": "WisdomTree Emerging Markets Quality Dividend Growth Fund", "featured": false, "active": false },
    { "id": 47, "catId": 100, "name": "Deville", "description": "Koss, Turcotte and Huels", "image": "47", "price": 9659, "salePrice": 4614, "stock": "Belden Inc", "featured": false, "active": false },
    { "id": 48, "catId": 100, "name": "Dring", "description": "Nader-Stark", "image": "48", "price": 9660, "salePrice": 4615, "stock": "Incyte Corporation", "featured": true, "active": true }
  ]
  constructor() { }

/* metodus ami visszaadja az osszes termekeket */
  getAllProducts(): Product[]{
      return  this.list;
  }

  /* metodus ami visszaadja a kiemelt termekeket, opcionalisan ossze is keveri*/
  getFeatured(randomized?: boolean): Product[]{
    const kiemelt = this.list.filter( item => item.featured );
    return randomized ? this.randomize(kiemelt) :  kiemelt;
  }

 /* metodus ami visszaadja a kiemelt termekeket, a cat1 kategriaban,opcionalisan ossze is keveri*/
  getCat1Featured(randomized?: boolean): Product[]{
    const kiemelt = this.list.filter( item => item.featured && item.catId===100);
    return randomized ? this.randomize(kiemelt) :  kiemelt;
  }

 /* metodus ami visszaadja a kiemelt termekeket, a cat2 kategriaban,opcionalisan ossze is keveri*/
  getCat2Featured(randomized?: boolean): Product[]{
    const kiemelt = this.list.filter( item => item.featured && item.catId===200);
    return randomized ? this.randomize(kiemelt) :  kiemelt;
  }

  /* metodus ami visszaadja az akcios (salePrise !=0) termekeket */
  getSaleProducts(randomized?: boolean): Product[]{
    return this.list.filter( item => item.salePrice != 0 );
  }

  /* metodus ami visszaadja az 1.kategoria (catId ==1) termekeket */
  getCat1Products(randomized?: boolean): Product[]{
    return this.list.filter( item => item.catId == 100 );
  }

  /* metodus ami visszaadja az 1.kategoria (catId ==1) termekeket */
  getCat2Products(randomized?: boolean): Product[]{
    return this.list.filter( item => item.catId == 200 );
  }

  /* metodus tomb elemeinek veletlen visszaadasa */
  randomize(rendezettTomb: any[] ): any[] {
    return rendezettTomb.sort( elem => Math.random() - 0.5);
  }
}
