import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'NG Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Táplálékkiegészítők', link: '/Táplálékkiegészítők'},
    {text: 'Kozmetikumok', link: '/Kozmetikumok'},
  ];

  constructor() { }
}
