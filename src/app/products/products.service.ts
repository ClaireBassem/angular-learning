import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data:any[]=[
    {id:1, name: 'Laptop', price: 1000},
    {id:2, name: 'mobile', price: 500},
    {id:3, name: 'speakers', price: 200}
  ]

  constructor() { }

  getAllProducts(){
    return of(this.data);
  }
  getProduct(id: number){
    return of(this.data.find(p=>p.id===id));
  }
}
